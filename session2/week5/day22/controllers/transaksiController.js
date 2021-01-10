const client = require('../models/connection.js') // import connection
const { ObjectId } = require('mongodb') // Import ObjectId from mongodb

class TransaksiController {

  // get All data
  async getAll(req, res) {
    const penjualan = client.db('penjualan') // Connect to penjualan database
    const transaksi = penjualan.collection('transaksi') // Connect to transaksi collection / table

    // find all transaksi data
    transaksi.find({}).toArray().then(result => {
      res.json({
        status: "success",
        data: result
      })
    })
  }

  // get one data
  async getOne(req, res) {
    const penjualan = client.db('penjualan') // Connect to penjualan database
    const transaksi = penjualan.collection('transaksi') // Connect to transaksi collection / table

    // Find one data
    transaksi.findOne({
      _id: new ObjectId(req.params.id)
    }, {
      // projection: { _id: 0, barang: 1, pelanggan: 1 }
    }).then(result => {
      res.json({
        status: "success",
        data: result
      })
    })
  }

  // create a data
  async create(req, res) {
    const penjualan = client.db('penjualan') // Connect to penjualan database
    const transaksi = penjualan.collection('transaksi') // Connect to transaksi collection / table

    // Get data barang depends on req.body.id_barang
    const barang = await penjualan.collection('barang').findOne({
      _id: new ObjectId(req.body.id_barang)
    })

    // Get data pelanggan depends on req.body.id_pelanggan
    const pelanggan = await penjualan.collection('pelanggan').findOne({
      _id: new ObjectId(req.body.id_pelanggan)
    })

    let total = eval(barang.harga.toString()) * req.body.jumlah // Calculate total of transaksi

    // Insert data transaksi
    transaksi.insertOne({
      barang: barang,
      pelanggan: pelanggan,
      jumlah: req.body.jumlah,
      total: total
    }).then(result => {
      res.json({
        status: "success",
        data: result.ops[0]
      })
    })
  }

  // update a data
  async update(req, res) {
    const penjualan = client.db('penjualan') // Connect to penjualan database
    const transaksi = penjualan.collection('transaksi') // Connect to transaksi collection / table

    // Get data barang depends on req.body.id_barang
    const barang = await penjualan.collection('barang').findOne({
      _id: new ObjectId(req.body.id_barang)
    })

    // Get data pelanggan depends on req.body.id_pelanggan
    const pelanggan = await penjualan.collection('pelanggan').findOne({
      _id: new ObjectId(req.body.id_pelanggan)
    })

    let total = eval(barang.harga.toString()) * req.body.jumlah // Calculate total of transaksi

    // Update data depends on transaksi
    transaksi.updateOne({
      _id: new ObjectId(req.params.id)
    }, {
      $set: {
        barang: barang,
        pelanggan: pelanggan,
        jumlah: req.body.jumlah,
        total: total
      }
    }).then(() => {
      return transaksi.findOne({
        _id: new ObjectId(req.params.id)
      })
    }).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // delete data
  async delete(req, res) {
    const penjualan = client.db('penjualan') // Connect to penjualan database
    const transaksi = penjualan.collection('transaksi') // Connect to transaksi collection / table

    // delete data depends on req.params.id
    transaksi.deleteOne({
      _id: new ObjectId(req.params.id)
    }).then(result => {
      res.json({
        status: 'success',
        data: null
      })
    })
  }

}

module.exports = new TransaksiController;
