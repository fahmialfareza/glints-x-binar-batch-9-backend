const express = require('express'); // import express
const router = express.Router(); // import router
const passport = require('passport'); // import passport
const auth = require('../middlewares/auth'); // import passport auth strategy
const UserController = require('../controllers/userController'); // import userController
const userValidator = require('../middlewares/validators/userValidator'); // import userValidator

// if user go to localhost:3000/signup
router.post('/signup', [userValidator.signup, function(req, res, next) {
  passport.authenticate('signup', {
    session: false
  }, function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({
        status: 'Error',
        message: info.message
      });
      return;
    }

    UserController.signup(user, req, res, next);
  })(req, res, next);
}]);

// if user go to localhost:3000/login
router.post('/login', [userValidator.login, function(req, res, next) {
  passport.authenticate('login', {
    session: false
  }, function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({
        status: 'Error',
        message: info.message
      });
      return;
    }

    UserController.login(user, req, res, next);
  })(req, res, next);
}]);

module.exports = router; // export router
