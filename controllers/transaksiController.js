const {
  barang,
  pelanggan,
  transaksi
} = require('../models');
class TransaksiController {
  async getAll(req, res) {
    transaksi.find({}).then(result => {
      res.json({
        status: "Succes get all data",
        data: result
      })
    })
  }
  async getOne(req, res) {
    transaksi.findOne({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: "Succes",
        data: result
      })
    })
  }
  async create(req,res) {
    const data = await Promise.all([
      barang.findOne({
        _id:req.body.id_barang
      }),
      pelanggan.findOne({
        _id:req.body.id_pelanggan
      })
    ])
    const total = eval(data[0].harga.toString())*req.body.jumlah

    transaksi.create({
      barang:data[0],
      pelanggan: data[1],
      jumlah:eval(req.body.jumlah),
      total:total
    }).then(result=>{
      res.json({
        status:"Succes create new transaksi",
        data:result
      })
    })
  }
  async update(req,res) {
    const data = await Promise.all([
      barang.findOne({
        _id:req.body.id_barang
      }),
      pelanggan.findOne({
        _id:req.body.id_pelanggan
      })
    ])
    let total = eval(data[0].harga.toString())*req.body.jumlah
    transaksi.findOneAndUpdate({
      _id:req.params.id
    },{
      barang:data[0],
      pelanggan:data[1],
      jumlah:req.body.jumlah,
      total:total
    }).then(()=>{
      return transaksi.findOne({
        _id:req.params.id
      })
    }).then(result=>{
      res.json({
        status:"Succes updating data",
        data:result
      })
    })
  }
  async delete(req, res) {
    transaksi.delete({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: "Succes delete data",
        data: null
      })
    })
  }
}

module.exports = new TransaksiController;
