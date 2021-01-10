const express = require('express')
const router = express.Router()
const PemasokController = require('../controllers/pemasokController.js')
const pemasokValidator = require('../middlewares/validators/pemasokValidator.js')

router.get('/', PemasokController.getAll)
router.get('/:id', PemasokController.getOne)
router.post('/create', pemasokValidator.create, PemasokController.create)
router.put('/update/:id', pemasokValidator.update, PemasokController.update)
router.delete('/delete/:id', PemasokController.delete)

module.exports = router;