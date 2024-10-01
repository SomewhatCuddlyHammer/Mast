const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define allowed IP addresses
const allowedIPs = ['107.218.233.176']; // Your actual IP address

// Middleware for IP whitelisting
app.use((req, res, next) => {
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (allowedIPs.includes(clientIP)) {
        next(); // Proceed to the next middleware
    } else {
        res.status(403).json({ error: 'Forbidden: Your IP is not allowed' });
    }
});

// GET endpoint for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the mast API!');
});

// POST endpoint to handle notifications
app.post('/', (req, res) => {
    console.log('Received POST request:', req.body);
    if (req.body && req.body.challenge) {
        return res.status(200).send(req.body.challenge);
    }
    res.status(200).send('Notification received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



