const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Mast API!');
});

// Sample route for handling webhook (you can customize this as needed)
app.post('/webhook', (req, res) => {
  const eventData = req.body; // Get the webhook data from the request
  console.log('Webhook received:', eventData);
  res.status(200).send('Webhook received!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

