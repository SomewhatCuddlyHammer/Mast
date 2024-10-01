const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Example endpoint to handle incoming notifications
app.post('/', (req, res) => {
    console.log('Received a POST request');
    console.log('Request Body:', req.body); // Log the request body for debugging

    // Check if the request contains the challenge code from eBay
    if (req.body && req.body.challenge) {
        console.log('Received challenge code:', req.body.challenge);
        // Respond with the challenge code to validate the endpoint
        res.status(200).send(req.body.challenge);
    } else {
        // Handle other notifications or data
        res.status(200).send('Notification received');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







