// server.js

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
