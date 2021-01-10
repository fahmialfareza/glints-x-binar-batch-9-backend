const { good } = require('../../mysql/models');
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

const uploadDir = '/images/';
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
  getOne: [
    check('id').custom(value => {
      return good.findOne({
        id: value
      }).then(result => {
        if (!result) {
          throw new Error('Good not found!')
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
    //File upload
    upload.single('image'), // Upload image to /public/images/

    check('name').isString().isLength({ min: 8}),
    check('price').isNumeric(),
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
    //File upload
    upload.single('image'), // Upload image to /public/images/

    check('id').isNumeric().custom((value, { req }) => {
      return good.findOne({
        id: value,
        user_id: req.user.id
      }).then(result => {
        if (!result) {
          throw new Error('Good is not found!')
        }
      })
    }),
    check('name').isString().isLength({ min: 8}),
    check('price').isNumeric(),
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
    check('id').isNumeric().custom((value, { req }) => {
      return good.findOne({
        id: value,
        user_id: req.user.id
      }).then(result => {
        if (!result) {
          throw new Error('Good is not found!')
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
  ]
};
