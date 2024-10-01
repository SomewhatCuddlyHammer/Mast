const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define allowed IP addresses
const allowedIPs = ['107.218.233.176']; // Replace with your actual IP address(es)

// Middleware for IP whitelisting
app.use((req, res, next) => {
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (allowedIPs.includes(clientIP)) {
        next(); // IP is allowed, proceed to the next middleware
    } else {
        res.status(403).json({ error: 'Forbidden: Your IP is not allowed' });
    }
});

// Example endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the mast API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


