const express = require('express')
const router = express.Router()
const PelangganController = require('../controllers/pelangganController.js')
const pelangganValidator = require('../middlewares/validators/pelangganValidator.js')

router.get('/', PelangganController.getAll)
router.get('/:id', PelangganController.getOne)
router.post('/create', pelangganValidator.create, PelangganController.create)
router.put('/update/:id', pelangganValidator.update, PelangganController.update)
router.delete('/delete/:id', PelangganController.delete)

module.exports = router;