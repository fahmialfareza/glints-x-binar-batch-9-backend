const book = require("../../models").Book
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

/* Used to upload image */
const multer = require('multer'); //multipar form-data
const path = require('path');
const crypto = require('crypto');

const uploadDir = '/img/';
const storage = multer.diskStorage({
  destination: "./public" + uploadDir,
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({
  storage: storage,
  dest: uploadDir
});
/* End used to upload image */

module.exports = {
  create: [
    //File upload (karena pakai multer, tempatkan di posisi pertama agar membaca multipar form-data)
    upload.single('image'), // Upload image to /public/img/

    //Set form validation rule
    check('isbn').isLength({ min: 5 }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(b => {
        if (b) {
          throw new Error('ISBN already in use');
        }
      })
    }),
    check('name').isLength({ min: 2 }),
    check('year').isLength({ min: 4, max: 4 }).isNumeric(),
    check('author').isLength({ min: 2 }),
    check('description').isLength({ min: 10 }),
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
    //File upload (karena pakai multer, tempatkan di posisi pertama agar membaca multipar form-data)
    upload.single('image'),

    //Set form validation rule
    check('isbn').isLength({ min: 5 }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(b => {
        if (!b) {
          throw new Error('ISBN not found');
        }
      })
    }),
    check('name').isLength({ min: 2 }),
    check('year').isLength({ min: 4, max: 4 }).isNumeric(),
    check('author').isLength({ min: 2 }),
    check('description').isLength({ min: 10 }),
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
    //Set form validation rule
    check('isbn').isLength({ min: 5 }).isNumeric().custom(value => {
      return book.findOne({
        where: {
          isbn: value
        }
      }).then(b => {
        if (!b) {
          throw new Error('ISBN not found');
        }
      })
    }),
  ]
};
