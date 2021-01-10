const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middlewares/auth');
const TransactionController = require('../controllers/transactionController.js')
const transactionValidator = require('../middlewares/validators/transactionValidator.js')

router.get('/', [passport.authenticate('user', {
  session: false
})], TransactionController.getAll);

router.get('/:id', [passport.authenticate('user', {
  session: false
}), transactionValidator.getOne], TransactionController.getOne);

router.post('/create', [passport.authenticate('buyer', {
  session: false
}), transactionValidator.create], TransactionController.create);

router.put('/update/:id', [passport.authenticate('buyer', {
  session: false
}), transactionValidator.update], TransactionController.update);

router.delete('/delete/:id', [passport.authenticate('buyer', {
  session: false
}), transactionValidator.delete], TransactionController.delete);

module.exports = router;
