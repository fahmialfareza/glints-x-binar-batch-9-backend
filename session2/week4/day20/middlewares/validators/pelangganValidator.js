const { Transaksi, Barang, Pelanggan, Pemasok } = require("../../models")
const { check, validationResult, matchedData, sanitize } = require('express-validator')

module.exports = {
    create: [
        check('id').isNumeric().isLength({ min: 3 }).custom(value => {
            return Pelanggan.findOne({
                where: {
                    id: value
                }
            }) .then(p => {
                if(!p) {
                    throw new Error('ID pelanggan tidak ada!');
                }
            })
        }),
        check('name').isLength({ min: 3 }),
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
        check('id').isLength({ min: 1 }).isNumeric().custom(value => {
            return Pelanggan.findOne({
                where: {
                    id: value
                }
            })
            .then(p => {
                if (!p) {
                    throw new Error('Id Pelanggan tidak ada!')
                }
            })
        }),
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            }
            next();
        }
    ],

    delete: [
        check('id').isLength({ min: 1 }).isNumeric().custom( value => {
            return Pelanggan.findOne({
                where: {
                    id: value
                }
            })
            .then(p => {
                if (!p) {
                    throw new Error('Id tidak ditemukan');
                }
            })
        })
    ]
};