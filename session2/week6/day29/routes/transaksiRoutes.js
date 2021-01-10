const express = require('express') // Import express
const router = express.Router() // import router
const transaksiValidator = require('../middlewares/validators/transaksiValidator') // import transaksiValidator
const TransaksiController = require('../controllers/transaksiController') // import transaksiController

router.get('/', TransaksiController.getAll) // if accessing localhost:3000, it will go to TransaksiController getAll function
router.get('/:id', transaksiValidator.getOne, TransaksiController.getOne) // If accessing localhost:3000/:id, it will go to getOne function
router.post('/create', transaksiValidator.create, TransaksiController.create) // If accessing localhost:3000/create it will go to create method
router.put('/update/:id', transaksiValidator.update, TransaksiController.update) // If accessing localhost:3000/update/:id it will go to update method
router.delete('/delete/:id', transaksiValidator.delete, TransaksiController.delete) // if accessing localhost:3000/delete/:id, it will go to delete function

module.exports = router; // Exports router
