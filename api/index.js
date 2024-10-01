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

// Example endpoint to receive notifications
app.post('/', (req, res) => {
    const verificationToken = 'A1b2C3d4E5f6G7h8I9j0K_L-MnopqRstUvwxYz123456'; // Your verification token

    // Check for the verification token in the request headers
    const token = req.headers['x-verification-token'];

    if (token === verificationToken) {
        // Handle the notification (you can log the received notification here)
        console.log('Notification received:', req.body);
        res.status(200).send('Notification received');
    } else {
        res.status(403).send('Forbidden: Invalid verification token');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




