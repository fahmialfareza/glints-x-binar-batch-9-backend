const barang = require("../models").Barang
// const {
//     check,
//     validationResult,
//     matchedData,
//     sanitize
// } = require('express-validator'); //form validation & sanitize form params

class BarangController {

    async helloWorld(req, res) {
        res.send('Hello World');
    }

    async getAll(req, res) {
        barang.findAll().then(barang => {
            res.json(barang)
        })
    }

    async getOne(req, res) {
        barang.findOne({
            where: {
                id: req.params.id // where id of Transaksi table is equal to req.params.id
            },
        }).then(barang => {
            res.json(barang)
        })
    }

    async create(req, res) {
        barang.create({
            nama: req.body.nama,
            harga: req.body.harga,
            id_pemasok: req.body.id_pemasok,
            image: req.file === undefined ? "" : req.file.filename
        }).then(newBarang => {
            res.json({
                "status": "success",
                "message": "Barang berhasil ditambahkan",
                "data": newBarang
            })
        })
    }

    async update(req, res) {
        const update = {
            nama: req.body.nama,
            harga: req.body.harga,
            id_pemasok: req.body.id_pemasok,
            image: req.file === undefined ? "" : req.file.filename
        }
        barang.update(update, {
                where: {
                    id: req.params.id
                }
            })
            .then(affectedRow => {
                if (affectedRow) {
                    return barang.findOne({
                        where: {
                            id: req.params.id
                        }
                    })
                }

            })
            .then(barang => {
                res.json({
                    "status": "success",
                    "message": "Barang berhasil di update",
                    "data": barang
                })
            })
    }

    async delete(req, res) {
        barang.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(affectedRow => {
                if (affectedRow) {
                    return {
                        "status": "success",
                        "message": "Barang berhasil dihapus",
                        "data": null
                    }
                }

                return {
                    "status": "error",
                    "message": "Failed",
                    "data": null
                }

            })
            .then(r => {
                res.json(r)
            })

    }

}

module.exports = new BarangController;