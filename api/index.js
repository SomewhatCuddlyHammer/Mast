const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define your verification token (make sure this is a secure value)
const verificationToken = 'YOUR_VERIFICATION_TOKEN_HERE';

// Handle POST requests to the specified endpoint
app.post('/your-endpoint', (req, res) => {
    // Extract the challenge code and endpoint from the request
    const challengeCode = req.query.challenge_code; // Adjust according to how the challenge code is passed
    const endpoint = req.protocol + '://' + req.get('host') + req.originalUrl;

    // Check if challenge code is received
    if (!challengeCode) {
        return res.status(400).send('Challenge code is required.');
    }

    // Create the hash
    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');

    // Respond with the challengeResponse
    res.json({ challengeResponse: responseHash });
});

// Handle GET requests to verify the server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
