const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define a GET route for the root
app.get('/', (req, res) => {
    res.send('Welcome to the eBay Notification Endpoint!');
});

// Define a POST route for notifications
app.post('/', (req, res) => {
    console.log('Notification received:', req.body);
    const challengeCode = req.body.challengeCode;
    if (challengeCode) {
        res.send(challengeCode);
    } else {
        res.status(400).send('Challenge code missing');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
