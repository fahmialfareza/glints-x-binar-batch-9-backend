const {
  barang,
  pelanggan,
  transaksi
} = require('../../models')
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

module.exports = {
  getOne: [
    check('id').custom(value => {
      return transaksi.findOne({
        _id: value
      }).then(result => {
        if (!result) {
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
  create: [
    //Set form validation rule
    check('id_barang').custom(value => {
      return barang.findOne({
        _id: value
      }).then(b => {
        if (!b) {
          throw new Error('ID barang tidak ada!');
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return pelanggan.findOne({
        _id: value
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
    check('id').custom(value => {
      return transaksi.findOne({
        _id: value
      }).then(b => {
        if (!b) {
          throw new Error('ID transaksi tidak ada!');
        }
      })
    }),
    check('id_barang').custom(value => {
      return barang.findOne({
        _id: value
      }).then(b => {
        if (!b) {
          throw new Error('ID barang tidak ada!');
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return pelanggan.findOne({
        _id: value
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
  delete: [
    check('id').custom(value => {
      return transaksi.findOne({
        _id: value
      }).then(result => {
        if (!result) {
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
  ]
};
