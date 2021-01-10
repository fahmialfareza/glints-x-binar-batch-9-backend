const {
  barang,
  pelanggan,
  transaksi
} = require('../models') // import barang, pelanggan, transaksi model

class TransaksiController {

  // get all data
  async getAll(req, res) {
    // find all data
    transaksi.find({}).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // get one data
  async getOne(req, res) {
    // find one data
    transaksi.findOne({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // create data
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

    const total = eval(data[0].harga.toString()) * req.body.jumlah

    transaksi.create({
      barang: data[0],
      pelanggan: data[1],
      jumlah: eval(req.body.jumlah),
      total: total
    }).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  //update data
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

    const total = eval(data[0].harga.toString()) * req.body.jumlah

    transaksi.findOneAndUpdate({
      _id: req.params.id
    }, {
      barang: data[0],
      pelanggan: data[1],
      jumlah: eval(req.body.jumlah),
      total: total
    }).then(result => {
      res.json({
        status: 'success',
        data: result
      })
    })
  }

  // delete data
  async delete(req, res) {
    // delete data
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

module.exports = new TransaksiController;
