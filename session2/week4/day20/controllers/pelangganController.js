const {Transaksi, Barang, Pelanggan, Pemasok } = require("../models")
const {check, validationResult, matchedData, sanitize } = require('express-validator');

class PelangganController {
    async getAll(req, res) {
        Pelanggan.findAll().then(pelanggan => {
            res.json(pelanggan)
        })
    }

    async getOne(req, res) {
        Pelanggan.findOne({
            where: {
                id: req.params.id
            },
        }) .then(pelanggan => {
            res.json(pelanggan)
        })
    }

    async create(req, res) {
        Pelanggan.create({
            nama: req.body.nama
        })
        .then(newPelanggan => {
            res.json({
                "Status": "Success",
                "Message": "Pelanggan added",
                "data": newPelanggan
            })
        })
    }

    async update(req, res) {
        const update = {
            name: req.body.name
        }
        Pelanggan.update(update, {
            where: {
                id: req.body.id
            }
        })
        .then(affectedRow => {
            return Pelanggan.findOne({
                where: {
                    id: req.body.id
                }
            })
        })
        .then(p => {
            res.json({
                "Status": "Success",
                "Message": "Pelanggan di-update!",
                "data": p
            })
        })
    }

    async delete (req, res) {
        Pelanggan.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(affectedRow => {
            if (affectedRow) {
                return {
                    "Status": "Success",
                    "Message": "Pelanggan telah dihapus",
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

module.exports = new PelangganController;
