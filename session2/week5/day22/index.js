const express = require('express') // Import express
const app = express() // Make express app
const bodyParser = require('body-parser') // import bodyParser to read post body
const transaksiRoutes = require('./routes/transaksiRoutes') // Import routes for transaksi

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

app.use('/transaksi', transaksiRoutes) // If accessing localhost:3000/transaksi/*, it will go to transaksiRoutes variable

app.listen(3000) // make port 3000 for this app
