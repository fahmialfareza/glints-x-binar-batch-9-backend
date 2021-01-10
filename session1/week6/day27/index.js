const express = require('express') // Import express
const app = express() // Make express app
const bodyParser = require('body-parser') // Import bodyParser
const transaksiRoutes = require('./routes/transaksiRoutes') // Import transaksiRoutes
const barangRoutes = require('./routes/barangRoutes'); // import barangRoutes
const pelangganRoutes = require('./routes/pelangganRoutes'); // Import pelangganRoutes
const pemasokRoutes = require('./routes/pemasokRoutes') // import pemasokRoutes
const userRoutes = require('./routes/userRoutes'); // Import userRoutes

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/', userRoutes); // if accessing localhost:3000/*, it will go to userRoutes
app.use('/transaksi', transaksiRoutes) // if accessing localhost:3000/transaksi*, it will go to transaksiRoutes
app.use('/barang', barangRoutes); // if accessing localhost:3000/barang*, it will go to barangRoutes
app.use('/pelanggan', pelangganRoutes); // if accessing localhost:3000/pelanggan*, it will go to pelangganRoutes
app.use('/pemasok', pemasokRoutes); // if accessing localhost:3000/pemasok*, it will go to pemasokRoutes

app.listen(3000, () => console.log('Server running on localhost:3000')) // Run server with port 3000
