const express = require('express');
const router = express.Router();
const transaksiValidator = require('../middlewares/validators/transaksiValidator');
const TransaksiController = require('../controllers/transaksiController');

router.get('/', TransaksiController.getAll);
router.get('/:id', transaksiValidator.getOne, TransaksiController.getOne);
router.post('/create', transaksiValidator.create, TransaksiController.create);
router.put('/update/:id', transaksiValidator.update, TransaksiController.update);
router.delete('/delete/:id', transaksiValidator.delete, TransaksiController.delete);

module.exports = router;
