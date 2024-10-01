const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Expected verification token
const expectedToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Example endpoint to receive POST requests
app.post('/', (req, res) => {
    const verificationToken = req.headers['x-verification-token'];

    // Check if the verification token matches the expected token
    if (verificationToken === expectedToken) {
        console.log('Notification received:', req.body); // Log the body for debugging
        res.status(200).send('Notification received');
    } else {
        console.log('Invalid verification token'); // Log invalid token for debugging
        res.status(403).send('Forbidden: Invalid verification token');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
