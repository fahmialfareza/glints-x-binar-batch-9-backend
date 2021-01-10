const express = require('express');
const router = express.Router();
const pelangganValidator = require('../middlewares/validators/pelangganValidator');
const PelangganController = require('../controllers/pelangganController');

router.get('/', PelangganController.getAll);
router.get('/:id', pelangganValidator.getOne, PelangganController.getOne);
router.post('/create', pelangganValidator.create, PelangganController.create);
router.put('/update/:id', pelangganValidator.update, PelangganController.update);
router.delete('/delete/:id', pelangganValidator.delete, PelangganController.delete);

module.exports = router;
