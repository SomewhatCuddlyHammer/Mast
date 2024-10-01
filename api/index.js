// Mast/api/index.js

const express = require('express');
const ebayWebhook = require('./ebay-webhook');

const app = express();

// Use the ebay webhook route
app.use('/api', ebayWebhook);

// Set the server to listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
