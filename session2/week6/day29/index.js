const express = require('express') // import express
const app = express() // make express app
const bodyParser = require('body-parser') // import body-parser
const transaksiRoutes = require('./routes/transaksiRoutes') // import transaksiRoutes

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'))

app.use('/transaksi', transaksiRoutes) // if accessing localhost:3000/transaksi/* it will go to transaksiRoutes

app.listen(3000, () => console.log('Server running on localhost:3000')) // Server running on port 3000

module.exports = app; // exports app for testing
