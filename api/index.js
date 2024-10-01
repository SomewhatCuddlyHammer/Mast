const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser middleware
app.use(bodyParser.json());

// Replace with your actual verification token
const verificationToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';
const endpointUrl = `https://mast-ebay-mu.vercel.app/ebay-notification`; // Your endpoint URL

// Endpoint to handle eBay notifications
app.post('/ebay-notification', (req, res) => {
    const challengeCode = req.query.challenge_code;

    // Validate that challengeCode exists
    if (!challengeCode) {
        return res.status(400).send({ error: 'No challenge code provided' });
    }

    // Create the response hash
    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpointUrl);
    const responseHash = hash.digest('hex');

    // Respond to eBay with the challenge response
    res.status(200).json({ challengeResponse: responseHash });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
