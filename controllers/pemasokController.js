const {pemasok} = require('../models');

class PemasokController {
  async getAll(req,res) {
    pemasok.find({}).then(result=>{
      res.json({
        status:"Succes get all data",
        data:result
      })
    })
  }
  async getOne(req,res) {
    pemasok.findOne({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes get data",
        data:result
      })
    })
  }
  async create(req,res) {
    pemasok.create({
      nama:req.body.nama
    }).then(result=>{
      res.json({
        status:"Succes create new data",
        data:result
      })
    })
  }
  async update(req,res) {
    pemasok.findOneAndUpdate({
      _id:req.params.id
    }, {
      nama:req.body.nama
    }).then(()=>{
      return pemasok.findOne({
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
    pemasok.delete({
      _id:req.params.id
    }).then(result=>{
      res.json({
        status:"Succes delete data",
        data:null
      })
    })
  }
}

module.exports = new PemasokController;
