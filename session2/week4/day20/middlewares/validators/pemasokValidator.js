const {Pemasok, Transaksi, Barang, Pelanggan } = require('../../models')
const { check, validationResult, matchedData, sanitize } = require('express-validator')

module.exports = {
    create: [
        check('id').isLength({ min: 1 }).isNumeric().custom(value => {
            return Pemasok.findOne({
                where: {
                    id: value
                }
            }) .then(p => {
                if(!p) {
                    throw new Error('ID Pemasok tidak ada!');
                }
            })
        }),
        check('name').isLength({ min: 2 }),
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
            return Pemasok.findOne({
                where: {
                    id: value
                }
            }).then(p => {
                if (!p) {
                    throw new Error('ID Pemasok tidak ditemukan!');
                }
            })
        }),
        check('name').isLength({ min: 2 }),
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
        check('id').isLength({ min: 1 }).isNumeric().custom(value => {
            return Pemasok.findOne({
                where: {
                    id: value
                }
            })
            .then(p => {
                if(!p) {
                    throw new Error('ID tidak ditemukan');
                }
            })
        })
    ]
};