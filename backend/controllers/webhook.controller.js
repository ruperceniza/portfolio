const crypto = require('crypto');

//Sanity webhook handler that triggers GitHub Actions workflow

exports.handleSanityWebhook = async (req, res) => {
  try {
    // Get raw body (Buffer from express.raw())
    const rawBody = req.body;

    // Debug logging
    console.log('Webhook received:', {
      headers: req.headers,
      bodyExists: !!rawBody,
      isBuffer: Buffer.isBuffer(rawBody),
      bodyLength: rawBody?.length
    });

    // Check if body exists
    if (!rawBody || !Buffer.isBuffer(rawBody) || rawBody.length === 0) {
      console.error('Empty or missing request body, or not a Buffer');
      return res.status(400).json({
        error: 'Bad request',
        details: 'Request body is empty, missing, or not properly formatted'
      });
    }

    // Verify webhook signature using raw body
    const signatureHeader = req.headers['sanity-webhook-signature'];
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (secret && signatureHeader) {
      // Parse Sanity's signature format: "t=timestamp,v1=signature"
      const parts = signatureHeader.split(',');
      const timestamp = parts.find(p => p.startsWith('t='))?.split('=')[1];
      const signature = parts.find(p => p.startsWith('v1='))?.split('=')[1];

      if (!timestamp || !signature) {
        console.error('Invalid signature format');
        return res.status(401).json({ error: 'Invalid signature format' });
      }

      // Compute signature: HMAC-SHA256 of "timestamp.rawBody"
      const signedPayload = `${timestamp}.${rawBody.toString()}`;
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(signedPayload)
        .digest('base64')
        .replace(/\+/g, '-')  // Convert to URL-safe base64
        .replace(/\//g, '_')  // Convert to URL-safe base64
        .replace(/=+$/, '');  // Remove padding

      if (expectedSignature !== signature) {
        console.error('Invalid webhook signature.');
        console.error('Expected:', expectedSignature);
        console.error('Got:', signature);
        return res.status(401).json({ error: 'Invalid signature' });
      }
      console.log('Signature verified successfully');
    }

    // Parse the body for use
    const body = JSON.parse(rawBody.toString());

    console.log('Sanity webhook received:', {
      type: body._type,
      id: body._id,
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
            sanity_document_id: body._id,
            sanity_document_type: body._type,
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
        id: body._id,
        type: body._type
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
