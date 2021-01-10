const express = require('express') // Import express
const router = express.Router() // Make router from app
const TransaksiController = require('../controllers/transaksiController.js') // Import TransaksiController
const transaksiValidator = require('../middlewares/validators/transaksiValidator.js') // Import validator to validate every request from user
const passport = require('passport'); // import passport
const auth = require('../middlewares/auth'); // import passport strategy

// If accessing localhost:3000/transaksi, it will call getAll function in TransaksiController class
router.get('/', [passport.authenticate('transaksi', {
  session: false
})],TransaksiController.getAll)

// If accessing localhost:3000/transaksi/:id, it will call getOne function in TransaksiController class
router.get('/:id', [passport.authenticate('transaksi', {
  session: false
}), transaksiValidator.getOne], TransaksiController.getOne)

// If accessing localhost:3000/transaksi/create, it will call create function in TransaksiController class
router.post('/create', [passport.authenticate('transaksi', {
  session: false
}), transaksiValidator.create], TransaksiController.create)

// If accessing localhost:3000/transaksi/update/:id, it will call update function in TransaksiController class
router.put('/update/:id', [passport.authenticate('transaksi', {
  session: false
}), transaksiValidator.update], TransaksiController.update)

// If accessing localhost:3000/transaksi/delete/:id, it will call delete function in TransaksiController class
router.delete('/delete/:id', [passport.authenticate('transaksi', {
  session: false
}), transaksiValidator.delete], TransaksiController.delete)

module.exports = router; // Export router
