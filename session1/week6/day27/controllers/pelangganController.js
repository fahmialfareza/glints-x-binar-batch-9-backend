const {pelanggan} = require('../models/mongodb');

class PelangganController {
  async getAll(req,res) {
    pelanggan.find({}).then(result=>{
      res.json({
        status:"Succes get all data",
        data:result
      })
    })
  }
  async getOne(req,res) {
    pelanggan.findOne({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes get data",
        data:result
      })
    })
  }
  async create(req,res) {
    pelanggan.create({
      nama:req.body.nama
    }).then(result=>{
      res.json({
        status:"Succes create new data",
        data:result
      })
    })
  }
  async update(req,res) {
    pelanggan.findOneAndUpdate({
      _id:req.params.id
    }, {
      nama:req.body.nama
    }).then(()=>{
      return pelanggan.findOne({
        _id:req.params.id
      })
    }).then(result=>{
      res.json({
        status:"Succes update data",
        data:result
      })
    })
  }
  async delete(req,res) {
    pelanggan.delete({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes delete data",
        data:null
      })
    })
  }
}

module.exports = new PelangganController;
