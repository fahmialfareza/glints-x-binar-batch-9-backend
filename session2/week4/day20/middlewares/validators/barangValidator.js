const {
    Barang,
    Pemasok
} = require("../../models") // Import models
const {
    check,
    validationResult,
    matchedData,
    sanitize
} = require('express-validator'); //form validation & sanitize form params

const multer = require('multer'); //multipar form-data
const path = require('path'); // to detect path of directory
const crypto = require('crypto'); // to encrypt something

const uploadDir = '/img/'; // make images upload to /img/
const storage = multer.diskStorage({
    destination: "./public" + uploadDir, // make images upload to /public/img/
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)

            cb(null, raw.toString('hex') + path.extname(file.originalname)) // encrypt filename and save it into the /public/img/ directory
        })
    }
})

const upload = multer({
    storage: storage,
    dest: uploadDir
}); // if we want to upload an image we can use it!
module.exports = {
    create: [
        //File upload (karena pakai multer, tempatkan di posisi pertama agar membaca multipar form-data)
        upload.single('image'),

        //Set form validation rule

        check('id_pemasok').isLength({
            min: 1
        }).isNumeric().custom(value => {
            return Pemasok.findOne({
                where: {
                    id: value
                }
            }).then(b => {
                if (!b) {
                    throw new Error('ID Pemasok tidak ada!');
                }
            })
        }),
        check('harga').isLength({
            min: 3
        }).isNumeric(),
        check('nama').isLength({
            min: 2
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
    update: [
        //Set form validation rule
        upload.single('image'),

        //Set form validation rule
        check('id').isLength({
            min: 1
        }),
        check('id_pemasok').isLength({
            min: 1
        }).isNumeric().custom(value => {
            return Pemasok.findOne({
                where: {
                    id: value
                }
            }).then(b => {
                if (!b) {
                    throw new Error('ID Pemasok tidak ada!');
                }
            })
        }),
        check('harga').isLength({
            min: 3
        }).isNumeric(),
        check('nama').isLength({
            min: 2
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
    delete: [
        check('id').isLength({
            min: 1
        }).isNumeric(),
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