const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define a GET route for the root
app.get('/', (req, res) => {
    res.send('Welcome to the eBay Notification Endpoint!');
});

// Example endpoint for receiving notifications
app.post('/', (req, res) => {
    console.log('Notification received:', req.body);
    // Respond to eBay's challenge
    const challengeCode = req.body.challengeCode; // Ensure this matches the actual challenge code format
    if (challengeCode) {
        res.send(challengeCode); // Respond back with the challenge code
    } else {
        res.status(400).send('Challenge code missing'); // Send an error response if no challenge code is found
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
