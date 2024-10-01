// Mast/api/ebay-webhook.js

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// Use body-parser middleware to parse JSON bodies
router.use(bodyParser.json());

// Define the webhook endpoint
router.post('/webhook', (req, res) => {
    const notification = req.body;

    // Log the notification for debugging purposes
    console.log('Received eBay notification:', notification);

    // Handle the notification (custom logic goes here)
    // For example, you might want to process different event types
    // Check notification type and take appropriate action

    // Send an appropriate response back to eBay
    res.status(200).send('Webhook received');
});

module.exports = router;
