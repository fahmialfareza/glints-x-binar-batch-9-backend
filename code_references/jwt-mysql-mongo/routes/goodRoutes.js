const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middlewares/auth');
const GoodController = require('../controllers/goodController');
const goodValidator = require('../middlewares/validators/goodValidator');

router.get('/', GoodController.getAll);

router.get('/:id', goodValidator.getOne, GoodController.getOne);

router.post('/create', [passport.authenticate('seller', {
  session: false
}), goodValidator.create], GoodController.create);

router.put('/update/:id', [passport.authenticate('seller', {
  session: false
}), goodValidator.update], GoodController.update);

router.delete('/delete/:id', [passport.authenticate('seller', {
  session: false
}), goodValidator.delete], GoodController.delete);

module.exports = router;
