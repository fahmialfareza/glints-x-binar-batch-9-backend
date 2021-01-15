const { user } = require('../models/mysql') // import user models
const passport = require('passport'); // import passport
const jwt = require('jsonwebtoken'); // import jsonwebtoken

class UserController {
  
  // if user login
  async login(req, res) {
    // get the req.user from passport authentication
    const body = {
      id: req.user.id,
      email: req.user.email
    };

    // create jwt token from body variable
    const token = jwt.sign({
      user: body
    }, 'secret_password')

    // success to create token
    res.status(200).json({
      message: 'Login success!',
      token: token
    })
  }

}

module.exports = new UserController; // export UserController
