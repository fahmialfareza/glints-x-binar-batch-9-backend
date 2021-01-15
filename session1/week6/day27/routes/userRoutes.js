const express = require('express'); // import express
const router = express.Router(); // import router
const passport = require('passport'); // import passport
const auth = require('../middlewares/auth'); // import passport auth strategy
const UserController = require('../controllers/userController'); // import userController
const userValidator = require('../middlewares/validators/userValidator'); // import userValidator

// if user go to localhost:3000/signup
router.post('/signup', [userValidator.signup, auth.signup], UserController.login);

// if user go to localhost:3000/login
router.post('/login', [userValidator.login, auth.login], UserController.login);

module.exports = router; // export router
