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

function is_hexadecimal(str) {
  regexp = /^[0-9a-fA-F]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getOne: [
    check('id').custom(value => {
      if (value.length != 24 || !is_hexadecimal(value)) {
        throw new Error('ID transaksi salah!')
      }

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
    }
  ],
  create: [
    check('id_barang').custom(value => {
      return barang.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID barang tidak ada!')
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return pelanggan.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID pelanggan tidak ada!')
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
    }
  ],
  update: [
    check('id').custom(value => {
      return transaksi.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID transaksi tidak ada!')
        }
      })
    }),
    check('id_barang').custom(value => {
      return barang.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID barang tidak ada!')
        }
      })
    }),
    check('id_pelanggan').custom(value => {
      return pelanggan.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID pelanggan tidak ada!')
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
    }
  ],
  delete: [
    check('id').custom(value => {
      return transaksi.findOne({
        _id: value
      }).then(result => {
        if (!result) {
          throw new Error('ID transaksi tidak ada!')
        }
      }).catch(error => {
        throw new Error('ID transaksi tidak ada!')
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
    }
  ]
};
