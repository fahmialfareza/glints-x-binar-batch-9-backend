const express = require('express');
const router = express.Router();
const barangValidator = require('../middlewares/validators/barangValidator');
const BarangController = require('../controllers/barangController');

router.get('/', BarangController.getAll);
router.get('/:id', barangValidator.getOne, BarangController.getOne);
router.post('/create', barangValidator.create, BarangController.create);
router.put('/update/:id', barangValidator.update, BarangController.update);
router.delete('/delete/:id', barangValidator.delete, BarangController.delete);

module.exports = router;
