const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhook.controllers');

// POST /api/webhook/sanity - Receives Sanity CMS webhooks
router.post('/sanity', webhookController.handleSanityWebhook);

module.exports = router;
