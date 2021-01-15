const {barang, pemasok} = require('../models/mongodb');

class BarangController {
  async getAll(req,res) {
    console.log(req.user)

    barang.find({}).then(result=>{
      res.json({
        status:"Succes get all the data",
        data:result
      })
    })
  }
  async getOne(req,res) {
    barang.findOne({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes get data",
        data:result
      })
    }).catch(err => {
      res.json({
        status: "Error",
        errors: err
      })
    })
  }
  async create(req,res) {
    const data = await pemasok.findOne({
      _id:req.body.id_pemasok
    })
    barang.create({
      pemasok:data,
      nama:req.body.nama,
      harga:req.body.harga,
      image:req.file===undefined?"":req.file.filename
    }).then(result=>{
      res.json({
        status:"Succes create new data",
        data:result
      })
    })
  }
  async update(req,res) {
    const data = await pemasok.findOne({
      _id:req.body.id_pemasok
    })
    barang.findOneAndUpdate({
      _id:req.params.id
    }, {
      pemasok:data,
      nama:req.body.nama,
      harga:req.body.harga,
      image: req.file===undefined?"":req.file.filename
    }).then(()=>{
      return barang.findOne({
        _id:req.params.id
      })
    }).then(result=>{
      res.json({
        status:"Succes updating data",
        data:result
      })
    })
  }
  async delete(req,res) {
    barang.delete({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes delete data",
        data:null
      })
    })
  }
}

module.exports=new BarangController;
