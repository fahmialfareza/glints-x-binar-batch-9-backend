const express = require('express');
const router = express.Router();
const pemasokValidator = require('../middlewares/validators/pemasokValidator');
const PemasokController = require('../controllers/pemasokController');

router.get('/', PemasokController.getAll);
router.get('/:id', pemasokValidator.getOne, PemasokController.getOne);
router.post('/create', pemasokValidator.create, PemasokController.create);
router.put('/update/:id', pemasokValidator.update, PemasokController.update);
router.delete('/delete/:id', pemasokValidator.delete, PemasokController.delete);

module.exports = router;
