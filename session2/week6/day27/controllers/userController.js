const { user } = require('../models/mysql') // import user models
const passport = require('passport'); // import passport
const jwt = require('jsonwebtoken'); // import jsonwebtoken

// make class UserController
class UserController {

  // if user signup
  async signup(user, req, res) {
    const body = {
      id: user.dataValues.id,
      email: user.dataValues.email
    }

    // create jwt token from body variable
    const token = await jwt.sign({
      user: body
    }, 'secret_password')

    // response token to user
    res.status(200).json({
      message: 'Signup success!',
      token: token
    })
  }


  // if user login
  async login(user, req, res) {
    // get the req.user from passport authentication
    const body = {
      id: user.dataValues.id,
      email: user.dataValues.email
    };

    // create jwt token from body variable
    const token = jwt.sign({
      user: body
    }, 'secret_password')

    // success to create token
    res.status(200).json({
      message: 'Signup success!',
      token: token
    })
  }

}

module.exports = new UserController; // Export user controller
