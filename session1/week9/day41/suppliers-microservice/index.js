const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser
const supplierRoutes = require('./routes/supplierRoutes'); // Import supplierRoutes

const app = express(); // Make express app

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/suppliers', supplierRoutes); // If access localhost:3001, it will be go to supplierRoutes

// Server running on port 3001
app.listen(3001, () => {
  console.log('Supplier running on port 3001!');
})
