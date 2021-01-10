const {
  Transaksi,
  Barang,
  Pelanggan
} = require("../models")
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

class TransaksiController {

  constructor() {
    Barang.hasMany(Transaksi, {
      foreignKey: 'id_barang'
    })
    Pelanggan.hasMany(Transaksi, {
      foreignKey: 'id_pelanggan'
    })
    Transaksi.belongsTo(Barang, {
      foreignKey: 'id_barang'
    })
    Transaksi.belongsTo(Pelanggan, {
      foreignKey: 'id_barang'
    })
  }

  // Get All data from transaksi
  async getAll(req, res) {
    Transaksi.findAll({ // find all data of Transaksi table
      // attributes: ['id', 'jumlah', 'total', ['createdAt', 'waktu']], // just these attributes that showed
      include: [{
        model: Barang,
        // attributes: ['nama'] // just this attrubute from Barang that showed
      }, {
        model: Pelanggan,
        // attributes: ['nama'] // just this attrubute from Pelanggan that showed
      }]
    }).then(transaksi => {
      res.json(transaksi) // Send response JSON and get all of Transaksi table
    })
  }

  // Get One data from transaksi
  async getOne(req, res) {
    Transaksi.findOne({ // find one data of Transaksi table
      where: {
        id: req.params.id // where id of Transaksi table is equal to req.params.id
      },
      // attributes: ['id', 'jumlah', 'total', ['createdAt', 'waktu']], // just these attributes that showed
      include: [{
        model: Barang,
        // attributes: ['nama'] // just this attrubute from Barang that showed
      }, {
        model: Pelanggan,
        // attributes: ['nama'] // just this attrubute from Pelanggan that showed
      }]
    }).then(transaksi => {
      res.json(transaksi) // Send response JSON and get one of Transaksi table depend on req.params.id
    })
  }

  // Create Transaksi data
  async create(req, res) {
    Barang.findOne({ // find one data of Barang table
      where: {
        id: req.body.id_barang // where id of Barang table is equal to req.params.id
      },
      attributes: ['harga'] // Get harga from Barang
    }).then(harga => {
      var total = harga.harga * req.body.jumlah // Make total variable

      // Transaksi table create data
      return Transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total: total,
      })
    }).then(newtransaksi => {
      // Send response JSON and get one of Transaksi table that we've created
      res.json({
        "status": "success",
        "message": "transaksi added",
        "data": newtransaksi
      })
    })
  }

  // Update Transaksi data
  async update(req, res) {
    Barang.findOne({ // find one data of Barang table
      where: {
        id: req.body.id_barang // where id of Barang table is equal to req.params.id
      },
      attributes: ['harga'] // Get harga from Barang
    }).then(harga => {
      var total = harga.harga * req.body.jumlah // Make total variable

      // Make update query
      var update = {
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total: total,
      }

      // Transaksi table update data
      return Transaksi.update(update, {
        where: {
          id: req.params.id
        }
      })
    }).then(affectedRow => {
      return Transaksi.findOne({ // find one data of Transaksi table
        where: {
          id: req.params.id // where id of Transaksi table is equal to req.params.id
        }
      })
    }).then(b => {
      // Send response JSON and get one of Transaksi table that we've updated
      res.json({
        "status": "success",
        "message": "transaksi updated",
        "data": b
      })
    })
  }

  // Soft delete Transaksi data
  async delete(req, res) {
    Transaksi.destroy({ // Delete data from Transaksi table
      where: {
        id: req.params.id // Where id of Transaksi table is equal to req.params.id
      }
    }).then(affectedRow => {
      // If delete success, it will return this JSON
      if (affectedRow) {
        return {
          "status": "success",
          "message": "transaksi deleted",
          "data": null
        }
      }

      // If failed, it will return this JSON
      return {
        "status": "error",
        "message": "Failed",
        "data": null
      }
    }).then(r => {
      res.json(r) // Send response JSON depends on failed or success
    })
  }

}

module.exports = new TransaksiController;
