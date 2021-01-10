const { user } = require('../mysql/models')
const passport = require('passport');
const jwt = require('jsonwebtoken');

class UserController {

  async signup(req, res) {
    const body = {
      id: req.user.dataValues.id,
      email: req.user.dataValues.email
    };

    const token = jwt.sign({
      user: body
    }, 'secret_password')

    res.status(200).json({
      message: 'Signup success!',
      token: token
    })
  }

  async login(req, res) {
    const body = {
      id: req.user.dataValues.id,
      email: req.user.dataValues.email
    };

    console.log(body);

    const token = jwt.sign({
      user: body
    }, 'secret_password')

    res.status(200).json({
      message: 'Signup success!',
      token: token
    })
  }

}

module.exports = new UserController;
