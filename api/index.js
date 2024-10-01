const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Verification token
const VERIFICATION_TOKEN = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Endpoint for handling notifications
app.post('/', (req, res) => {
    try {
        const verificationToken = req.headers['x-verification-token'];
        
        // Check for the verification token
        if (verificationToken !== VERIFICATION_TOKEN) {
            return res.status(403).send('Forbidden: Invalid token');
        }

        // Handle the notification
        console.log('Notification received:', req.body);

        // Respond to eBay's challenge
        res.status(200).send('Notification received');
    } catch (error) {
        console.error('Error processing notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



