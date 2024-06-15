'use strict';

//Loading the express library
const express = require('express');

// Create an express application
const app = express();

// Setting up a route
app.get('/', (request, result) => {
  result.send('Hello, World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
