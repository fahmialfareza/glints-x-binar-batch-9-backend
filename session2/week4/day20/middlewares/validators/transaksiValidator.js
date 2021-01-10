const { Transaksi, Barang, Pelanggan } = require("../../models") // Import models

const { check, validationResult, matchedData, sanitize } = require('express-validator'); //form validation & sanitize form params

module.exports = {
  create: [
    //Set form validation rule
    check('id_barang').isNumeric().custom(value => {
      return Barang.findOne({
        where: {
          id: value
        }
      }).then(b => {
        if (!b) {
          throw new Error('ID barang tidak ada!');
        }
      })
    }),
    check('id_pelanggan').isNumeric().custom(value => {
      return Pelanggan.findOne({
        where: {
          id: value
        }
      }).then(p => {
        if (!p) {
          throw new Error('ID pelanggan tidak ada!');
        }
      })
    }),
    check('jumlah').isNumeric(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next();
    },
  ],
  update: [
    //Set form validation rule
    check('id_barang').isNumeric().custom(value => {
      return Barang.findOne({
        where: {
          id: value
        }
      }).then(b => {
        if (!b) {
          throw new Error('ID barang tidak ada!');
        }
      })
    }),
    check('id_pelanggan').isNumeric().custom(value => {
      return Pelanggan.findOne({
        where: {
          id: value
        }
      }).then(p => {
        if (!p) {
          throw new Error('ID pelanggan tidak ada!');
        }
      })
    }),
    check('jumlah').isNumeric(),
    check('id').custom(value => {
      return Transaksi.findOne({
        where: {
          id: value
        }
      }).then(p => {
        if (!p) {
          throw new Error('ID transaksi tidak ada!')
        }
      })
    }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next();
    },
  ],
};
