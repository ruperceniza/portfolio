const crypto = require('crypto');

/**
 * Sanity webhook handler that triggers GitHub Actions workflow
 */
exports.handleSanityWebhook = async (req, res) => {
  try {
    // Verify webhook signature (optional but recommended)
    const signature = req.headers['sanity-webhook-signature'];
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (secret && signature) {
      const body = JSON.stringify(req.body);
      const hash = crypto
        .createHmac('sha256', secret)
        .update(body)
        .digest('hex');

      if (hash !== signature) {
        console.error('Invalid webhook signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    console.log('Sanity webhook received:', {
      type: req.body._type,
      id: req.body._id,
      timestamp: new Date().toISOString()
    });

    // Trigger GitHub Actions workflow
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO; // format: "username/repo-name"

    if (!githubToken || !githubRepo) {
      console.error('Missing GitHub configuration');
      return res.status(500).json({
        error: 'GitHub configuration missing',
        details: 'Please set GITHUB_TOKEN and GITHUB_REPO environment variables'
      });
    }

    const [owner, repo] = githubRepo.split('/');

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${githubToken}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'sanity-webhook',
          client_payload: {
            sanity_document_id: req.body._id,
            sanity_document_type: req.body._type,
            timestamp: new Date().toISOString()
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API error:', errorText);
      return res.status(response.status).json({
        error: 'Failed to trigger GitHub workflow',
        details: errorText
      });
    }

    console.log('GitHub Actions workflow triggered successfully');

    return res.status(200).json({
      success: true,
      message: 'Deployment triggered',
      document: {
        id: req.body._id,
        type: req.body._type
      }
    });

  } catch (error) {
    console.error('Webhook handler error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
};
