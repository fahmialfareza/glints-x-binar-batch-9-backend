const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser
const goodRoutes = require('./routes/goodRoutes'); // Import goodRoutes

const app = express(); // Make express app

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/goods', goodRoutes); // If access localhost:3002, it will be go to goodRoutes

// Server running on port 3002
app.listen(3002, () => {
  console.log('Goods running on port 3002!');
})
