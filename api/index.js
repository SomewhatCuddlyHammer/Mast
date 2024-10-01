const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Example endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the mast API!');
});

// Endpoint to handle POST requests (for receiving notifications)
app.post('/', (req, res) => {
    // Check for eBay's challenge token
    const verificationToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456'; // Replace with your actual token

    // Handle eBay challenge code validation
    if (req.body && req.body.challenge) {
        // Respond with the verification token
        res.json({ challenge: verificationToken });
    } else {
        // Log the notification received
        console.log('Notification received:', req.body);
        res.sendStatus(200); // Respond with success
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






