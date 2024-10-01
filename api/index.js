const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Your specific token
const VERIFICATION_TOKEN = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456';

// Notification endpoint
app.post('/', (req, res) => {
    // Log the notification body for debugging
    console.log('Notification received:', req.body);

    // Verify the token
    const token = req.headers['x-ebay-token'];
    if (token !== VERIFICATION_TOKEN) {
        console.log('Token validation failed');
        return res.status(403).send('Forbidden');
    }

    // If the token is valid, process the notification
    console.log('Valid token. Processing notification...');

    // Here you would handle the notification
    // For example: 
    // handleNotification(req.body);

    // Respond to eBay to acknowledge receipt of the notification
    res.status(200).send('Notification processed successfully');
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
