'use strict';

//Loading the express library
const express = require('express');
const path = require('path')
// Create an express application
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Setting up a route
// app.get('/', (request, result) => {
//   result.send('Hello, World');
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
