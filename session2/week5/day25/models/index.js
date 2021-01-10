const mongoose = require('mongoose') // Import mongoose

const uri = 'mongodb://localhost:27017/penjualan_dev' // Url database mongodb

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }) // Make connection to mongodb penjualan_dev database

const barang = require('./barang') // Import model barang
const pelanggan = require('./pelanggan') // Import model pelanggan
const pemasok = require('./pemasok') // Import model pemasok
const transaksi = require('./transaksi') // Import model transaksi

module.exports = { barang, pelanggan, pemasok, transaksi }; // Exports models
