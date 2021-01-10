const express = require('express');
const router = express.Router();
const barangValidator = require('../middlewares/validators/barangValidator');
const BarangController = require('../controllers/barangController');
const passport = require('passport')
const auth = require('../middlewares/auth')

router.get('/', passport.authenticate('barang', { session: false }), BarangController.getAll);
router.get('/:id', barangValidator.getOne, BarangController.getOne);
router.post('/create', barangValidator.create, BarangController.create);
router.put('/update/:id', barangValidator.update, BarangController.update);
router.delete('/delete/:id', barangValidator.delete, BarangController.delete);

module.exports = router;
