const { check, validationResult, matchedData, sanitize } = require('express-validator'); // Import express-validator
const client = require('../../models/connection.js') // Import connection
const { ObjectId } = require('mongodb') // Import ObjectId

module.exports = {
  create: [
    check('id_barang').custom(value => {
      return client.db('penjualan').collection('barang').findOne({
        _id: new ObjectId(value)
      }).then(result => {
        if (!result) {
          throw new Error('ID Barang tidak ada')
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return client.db('penjualan').collection('pelanggan').findOne({
        _id: new ObjectId(value)
      }).then(result => {
        if (!result) {
          throw new Error('ID Pelanggan tidak ada')
        }
      })
    }),
    check('jumlah').isNumeric(),
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next()
    }
  ],
  update: [
    check('id').custom(value => {
      return client.db('penjualan').collection('transaksi').findOne({
        _id: new ObjectId(value)
      }).then(result => {
        if (!result) {
          throw new Error('ID Transaksi tidak ada')
        }
      })
    }),
    check('id_barang').custom(value => {
      return client.db('penjualan').collection('barang').findOne({
        _id: new ObjectId(value)
      }).then(result => {
        if (!result) {
          throw new Error('ID Barang tidak ada')
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return client.db('penjualan').collection('pelanggan').findOne({
        _id: new ObjectId(value)
      }).then(result => {
        if (!result) {
          throw new Error('ID Pelanggan tidak ada')
        }
      })
    }),
    check('jumlah').isNumeric(),
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next()
    }
  ]
}
