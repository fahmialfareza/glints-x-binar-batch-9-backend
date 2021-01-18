const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const barang = require('./barang')
const pelanggan = require('./pelanggan')
const pemasok = require('./pemasok')
const transaksi = require('./transaksi')

module.exports = {
  barang,
  pelanggan,
  pemasok,
  transaksi
}
