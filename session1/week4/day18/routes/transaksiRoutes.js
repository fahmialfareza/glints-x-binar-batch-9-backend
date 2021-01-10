const express = require('express') // Import expresss
const router = express.Router() // Make a router
const TransaksiController = require('../controllers/transaksiController.js') // Import TransaksiController

router.get('/', TransaksiController.getAll) // if acessing localhost:3000/transaksi, it will do function getAll() in transaksiController class
router.get('/:id', TransaksiController.getOne) // if acessing localhost:3000/transaksi/:id, it will do function getOne() in transaksiController class
router.post('/create', TransaksiController.create) // if acessing localhost:3000/create, it will do function create() in transaksiController class
router.put('/update/:id', TransaksiController.update) // if acessing localhost:3000/update/:id, it will do function update() in transaksiController class
router.delete('/delete/:id', TransaksiController.delete) // if acessing localhost:3000/delete/:id, it will do function delete() in transaksiController class

module.exports = router; // Export router
