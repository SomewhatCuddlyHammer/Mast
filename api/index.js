const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Example endpoint to handle POST requests from eBay
app.post('/', (req, res) => {
    const verificationToken = req.headers['x-verification-token'];

    // Check if the verification token matches
    if (verificationToken === 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456') {
        // Handle the notification
        console.log('Notification received:', req.body);
        res.sendStatus(200); // Respond with 200 OK
    } else {
        console.log('Invalid verification token');
        res.sendStatus(403); // Forbidden
    }
});

// Example GET endpoint for testing
app.get('/', (req, res) => {
    res.send('Welcome to the mast API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





