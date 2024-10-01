const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Challenge token from eBay
const EBAY_VERIFICATION_TOKEN = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Handle POST requests from eBay
app.post('/', (req, res) => {
    // Log the incoming request body
    console.log('Notification received:', req.body);

    // Respond to eBay's validation challenge
    if (req.body.challenge) {
        const challengeResponse = req.body.challenge;

        // Send back the challenge response
        return res.status(200).send(challengeResponse);
    }

    // Handle the notification (e.g., account deletion)
    // Process the notification as needed here

    res.status(200).send('Notification received');
});

// Optional: Handle GET requests
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the eBay Notification API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
