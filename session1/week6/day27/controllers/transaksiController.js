const {
  barang,
  pelanggan,
  transaksi
} = require('../models/mongodb') // Import barang, pelanggan, transaksi models (mongodb)

// make TransaksiController class
class TransaksiController {
  // Get all data function
  async getAll(req, res) {
    // Find all transaksi collection data
    transaksi.find({}).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // Get one data
  async getOne(req, res) {
    // Find one
    transaksi.findOne({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // Create data
  async create(req, res) {
    // find barang and pelanggan
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang
      }),
      pelanggan.findOne({
        _id: req.body.id_pelanggan
      })
    ])

    const total = eval(data[0].harga.toString()) * req.body.jumlah // Make total variable

    // Create transaksi data
    transaksi.create({
      barang: data[0],
      pelanggan: data[1],
      jumlah: eval(req.body.jumlah),
      total: total
    }).then(result => {
      res.json({
        status: "success",
        data: result
      })
    })
  }

  // Update data
  async update(req, res) {
    // find barang and pelanggan
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang
      }),
      pelanggan.findOne({
        _id: req.body.id_pelanggan
      })
    ])

    let total = eval(data[0].harga.toString()) * req.body.jumlah; // Make total variable

    // Update data depends on _id
    transaksi.findOneAndUpdate({
      _id: req.params.id
    }, {
      "barang": data[0],
      "pelanggan": data[1],
      "jumlah": eval(req.body.jumlah),
      "total": total
    }).then(() => {
      return transaksi.findOne({
        _id: req.params.id
      })
    }).then(result => {
      res.json({
        status: "success",
        result: result
      })
    })
  }

  // Delete data
  async delete(req, res) {
    // Delete data
    transaksi.delete({
      _id: req.params.id
    }).then(() => {
      res.json({
        status: 'success',
        data: null
      })
    })
  }

}

module.exports = new TransaksiController; // Export TransaksiController class
