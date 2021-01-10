// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // post body handler
const transaksiRoutes = require('./routes/transaksiRoutes.js')

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/transaksi', transaksiRoutes) // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes

app.listen(3000, () => console.log("server running on http://localhost:3000"))
