const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middlewares/auth');
const UserController = require('../controllers/userController');
const userValidator = require('../middlewares/validators/userValidator');

router.post('/signup', [userValidator.signup, passport.authenticate('signup', {
  session: false
})], UserController.signup);
router.post('/login', [userValidator.login, passport.authenticate('login', {
  session: false
})], UserController.login);

module.exports = router;
