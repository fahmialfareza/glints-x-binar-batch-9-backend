const express = require('express') // Import express
const router = express.Router() // Make router from app
const BarangController = require('../controllers/barangController.js') // Import BarangController
const barangValidator = require('../middlewares/validators/barangValidator.js') // Import validator to validate every request from user

router.get('/', BarangController.getAll) // If accessing localhost:3000/barang, it will call getAll function in BarangController class
router.get('/:id', BarangController.getOne) // If accessing localhost:3000/barang/:id, it will call getOne function in BarangController class
router.post('/create', barangValidator.create, BarangController.create) // If accessing localhost:3000/barang/create, it will call create function in BarangController class
router.put('/update/:id', barangValidator.update, BarangController.update) // If accessing localhost:3000/barang/update/:id, it will call update function in BarangController class
router.delete('/delete/:id', barangValidator.delete, BarangController.delete) // If accessing localhost:3000/barang/delete/:id, it will call delete function in BarangController class

module.exports = router; // Export router
