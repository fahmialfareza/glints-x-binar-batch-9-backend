const express = require('express') // Import express
const app = express() // Make express app
const bodyParser = require('body-parser') // Import bodyParser
const transaksiRoutes = require('./routes/transaksiRoutes') // Import transaksiRoutes

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/transaksi', transaksiRoutes) // if accessing localhost:3000/transaksi*, it will go to transaksiRoutes
app.use('/barang', barangRoutes);
app.use('/pelanggan', pelangganRoutes);
app.use('/pemasok', pemasokRoutes);

app.listen(3000, () => console.log('Server running on localhost:3000')) // Run server with port 3000
