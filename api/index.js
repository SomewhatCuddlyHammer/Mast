const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Define the verification token
const VERIFICATION_TOKEN = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the eBay Notification Receiver!');
});

// Main POST route to handle notifications
app.post('/', (req, res) => {
    try {
        // Check the verification token in headers
        const token = req.headers['x-ebay-token'];
        if (token !== VERIFICATION_TOKEN) {
            return res.status(403).send('Forbidden: Invalid Token');
        }

        // Log the received notification for debugging
        console.log('Notification received:', req.body);

        // Process the notification (your logic here)
        // For now, just send a success response
        res.status(200).send('Notification processed successfully');
    } catch (error) {
        console.error('Error processing notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


