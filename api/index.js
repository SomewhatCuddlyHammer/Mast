const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Verification token
const verificationToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Example endpoint to receive notifications
app.post('/', (req, res) => {
    const receivedToken = req.headers['x-verification-token'];

    // Check if the verification token matches
    if (receivedToken === verificationToken) {
        console.log('Valid token. Processing notification...');
        console.log(req.body); // Log the notification details

        // Respond with the challenge code
        res.status(200).send('Notification received.');
    } else {
        console.log('Invalid token. Access denied.');
        res.status(403).send('Forbidden: Invalid verification token.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
