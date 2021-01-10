const mongoose = require('mongoose') // Import mongoose

const uri = "mongodb://localhost:27017/penjualan" // Database url in mongodb

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }) // Make connection to mongodb penjualan_dev database

const barang = require('./barang') // Import barang model
const pelanggan = require('./pelanggan') // Import pelanggan model
const pemasok = require('./pemasok') // Import pemasok model
const transaksi = require('./transaksi') // Import transaksi model

module.exports = { barang, pelanggan, pemasok, transaksi }; // Exports all models
