const passport = require('passport'); // Import passport
const localStrategy = require('passport-local').Strategy; // Import Strategy
const {
  user
} = require('../../models/mysql') // Import user model
const bcrypt = require('bcrypt'); // Import bcrypt
const JWTstrategy = require('passport-jwt').Strategy; // Import JWT Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt; // Import ExtractJWT

passport.use(
  'signup',
  new localStrategy({
      'usernameField': 'email', // field for username from req.body.email
      'passwordField': 'password', // field for password from req.body.password
      passReqToCallback: true // read other requests
    },
    async (req, email, password, done) => {
      // Create user data
      user.create({
        email: email, // email get from usernameField (req.body.email)
        password: password, // password get from passwordField (req.body.passport)
        role: req.body.role // role get from req.body.role
      }).then(result => {
        // If success, it will return authorization with req.user
        return done(null, result, {
          message: 'User created!'
        })
      }).catch(err => {
        // If error, it will return not authorization
        return done(null, false, {
          message: "User can't be created"
        })
      })
    },
  )
);

let signup = (req, res, next) => {
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

    req.user = user;

    next();
  })(req, res, next);
}

// If user login
passport.use(
  'login',
  new localStrategy({
      'usernameField': 'email', // username from req.body.email
      'passwordField': 'password' // password from req.body.password
    },
    async (email, password, done) => {
      // find user depends on email
      const userLogin = await user.findOne({
        where: {
          email: email
        }
      })

      // if user not found
      if (!userLogin) {
        return done(null, false, {
          message: 'User is not found!'
        })
      }

      // if user found and validate the password of user
      const validate = await bcrypt.compare(password, userLogin.password);

      // if wrong password
      if (!validate) {
        return done(null, false, {
          message: 'Wrong password!'
        })
      }

      // login success
      return done(null, userLogin, {
        message: 'Login success!'
      })
    }
  )
)

let login = (req, res, next) => {
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

    req.user = user;

    next();
  })(req, res, next);
}

// Strategy for transaction role
passport.use(
  'transaksi',
  new JWTstrategy({
      secretOrKey: 'secret_password', // key for jwt
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken() // extract token from authorization
    },
    async (token, done) => {
      // find user depend on token.user.email
      const userLogin = await user.findOne({
        where: {
          email: token.user.email
        }
      })

      // if user.role includes transaksi it will next
      if (userLogin.role.includes('transaksi')) {
        return done(null, token.user)
      }

      // if user.role not includes transaksi it will not authorization
      return done(null, false)
    }
  )
)

passport.use(
  'barang',
  new JWTstrategy({
      secretOrKey: 'secret_password', // key for jwt
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken() // extract token from authorization
    },
    async (token, done) => {
      // find user depend on token.user.email
      const userLogin = await user.findOne({
        where: {
          email: token.user.email
        }
      })

      // if user.role includes transaksi it will next
      if (userLogin.role.includes('barang')) {
        return done(null, token.user)
      }

      // if user.role not includes transaksi it will not authorization
      return done(null, false)
    }
  )
)

module.exports = { signup, login };
