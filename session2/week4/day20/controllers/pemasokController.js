const { Pemasok, Transaksi, Barang, Pelanggan } = require("../models")
const { check, validationResult, matchedData, sanitize } = require('express-validator')

class PemasokController {
    async getAll(req, res) {
        Pemasok.findAll().then(pemasok => {
            res.json(pemasok)
        })
    }

    async getOne(req, res) {
        Pemasok.findOne({
            where: {
                id: req.params.id
            },
        }) .then(pemasok => {
            res.json(pemasok)
        })
    }

    async create(req, res) {
        Pemasok.create({
            nama: req.body.nama
        })
        .then(newPemasok => {
            res.json({
                "Status": "Success",
                "Message": "Pemasok added",
                "data": newPemasok
            })
        })
    }

    async update(req, res) {
        const update = {
            name: req.body.name
        }
        Pemasok.update(update, {
            where: {
                id: req.body.id
            }
        })
        .then(affectedRow => {
            return Pemasok.findOne({
                where: {
                    id: req.body.id
                }
            })
        })
        .then(p => {
            res.json({
                "Status": "Success",
                "Message": "Pemasok di-update!",
                "data": p
            })
        })
    }

    async delete (req, res) {
        Pemasok.destroy({
            where: {
                id: req.params.id
            }
        }) 
        .then(affectedRow => {
            if (affectedRow) {
                return {
                    "Status": "Success",
                    "Message": "Pemasok telah dihapus",
                    "data": null
                }
            }

            return {
                "Status": "Error",
                "Message": "Failed",
                "data": null
            }
        }) 
        .then (r => {
            res.json(r)
        })
    }
}


module.exports = new PemasokController;