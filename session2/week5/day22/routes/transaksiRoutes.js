const express = require('express') // Import express
const router = express.Router() // Make express router
const TransaksiController = require('../controllers/transaksiController.js') // Import transaksiController from controllers directory
const { create, update } = require('../middlewares/validators/transaksiValidator.js') // Import transaksiValidator

router.get('/', TransaksiController.getAll) // If accessing localhost:3000/transaksi/, it will go to getAll method in TransaksiController
router.get('/:id', TransaksiController.getOne) // If accessing localhost:3000/transaksi/:id, it will go to getOne
router.post('/create', create, TransaksiController.create) // If accessing localhost:3000/create, it will go to transaksiValidator and create function in controller
router.put('/update/:id', update, TransaksiController.update) // If accessing localhost:3000/update/:id, it will go to transaksiValidator and update function in controller
router.delete('/delete/:id', TransaksiController.delete) // If accessing localhost:3000/delete/:id, it will go to delete function in transaksiController

module.exports = router; // Export router
