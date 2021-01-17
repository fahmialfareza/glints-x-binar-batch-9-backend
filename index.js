const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const transaksiRoutes = require('./routes/transaksiRoutes');
const barangRoutes = require('./routes/barangRoutes');
const pelangganRoutes = require('./routes/pelangganRoutes');
const pemasokRoutes = require('./routes/pemasokRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.use('/transaksi', transaksiRoutes);
app.use('/barang', barangRoutes);
app.use('/pelanggan', pelangganRoutes);
app.use('/pemasok', pemasokRoutes);

app.listen(3001, ()=> console.log("Server running on localhost:3000"))

module.exports = app;
