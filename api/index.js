const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Your verification token
const verificationToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';
// Your endpoint URL
const endpointUrl = 'https://mast-ebay-mu.vercel.app/account-deletion';

app.get('/account-deletion', (req, res) => {
    // Retrieve the challenge code from the query parameters
    const challengeCode = req.query.challenge_code;

    if (!challengeCode) {
        return res.status(400).json({ error: 'Missing challenge_code parameter' });
    }

    // Hash the challenge code, verification token, and endpoint URL
    const hash = crypto.createHash('sha256');
    hash.update(challengeCode + verificationToken + endpointUrl);
    const responseHash = hash.digest('hex');

    // Send the response to eBay
    res.status(200).json({ challengeResponse: responseHash });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
