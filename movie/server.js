const express = require('express');
const app = express();

// Serve files from "public" folder
app.use(express.static('public'));

// Start server on port 3000
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
