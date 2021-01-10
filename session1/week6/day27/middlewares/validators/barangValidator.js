const {
  barang,
  pemasok
} = require('../../models/mongodb');
const {
  check,
  matchedData,
  validationResult,
  sanitize
} = require('express-validator');

const multer = require('multer'); //multipar form-data
const path = require('path'); // to detect path of directory
const crypto = require('crypto'); // to encrypt something

const uploadDir = '/img/'; // make images upload to /img/
const storage = multer.diskStorage({
  destination: "./public" + uploadDir, // make images upload to /public/img/
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname)) // encrypt filename and save it into the /public/img/ directory
    })
  }
})

const upload = multer({
  storage: storage,
  dest: uploadDir
});

module.exports = {
  getOne: [
    check('id').custom(value => {
      return barang.findOne({
        _id: value
      }).then(result => {
        if (result.length == 0) {
          throw new Error('ID barang tidak ada!')
        }
      })
    }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        })
      }
      next();
    }
  ],
  create: [
    upload.single('image'),
    check('id_pemasok').custom(value => {
      return pemasok.findOne({
        _id: value
      }).then(p => {
        if (!p) {
          throw new Error('ID pemasok tidak ada!')
        }
      })
    }),
    check('nama').isString().custom(value => {
      return barang.findOne({
        nama: value
      }).then(n => {
        if (n) {
          throw new Error('Nama barang sudah ada')
        }
      })
    }),
    check('harga').isNumeric(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        })
      }
      next();
    }
  ],
  update: [
    upload.single('image'),
    check('id').custom(value => {
      return barang.findOne({
        _id: value
      }).then(result => {
        if (result.length == 0) {
          throw new Error('ID barang tidak ada')
        }
      })
    }),
    check('nama').isString(),
    check('harga').isNumeric(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        })
      }
      next();
    }
  ],
  delete: [
    check('id').custom(value => {
      return barang.findOne({
        _id: value
      }).then(result => {
        if (result.length == 0) {
          throw new Error('ID barang tidak ada!')
        }
      })
    }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        })
      }
      next();
    }
  ]
}
