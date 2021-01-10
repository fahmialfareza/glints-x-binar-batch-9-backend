const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {
  user
} = require('../../mysql/models');
const bcrypt = require('bcrypt');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'signup',
  new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      user.create({
        email: email,
        password: password
      }).then(user => {
        return done(null, user, {
          message: 'Signup success!'
        });
      }).catch(err => {
        return done(null, false, {
          message: "User can't create!"
        })
      })
    },
  )
);

passport.use(
  'login',
  new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      const userLogin = await user.findOne({
        email: email
      })

      if (!userLogin) {
        return done(null, false, {
          message: 'User not found!'
        })
      }

      const validate = await bcrypt.compare(password, userLogin.password);

      if (!validate) {
        return done(null, false, {
          message: 'Wrong password!'
        })
      }

      return done(null, userLogin, {
        message: 'Login success!'
      })
    }
  )
);

passport.use(
  'seller',
  new JWTstrategy({
      secretOrKey: 'secret_password',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        const userLogin = await user.findOne({
          email: token.user.email
        })

        if (userLogin.role.includes("seller")) {
          return done(null, token.user);
        }

        return done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'buyer',
  new JWTstrategy({
      secretOrKey: 'secret_password',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        const userLogin = await user.findOne({
          email: token.user.email
        })

        if (userLogin.role.includes("buyer")) {
          return done(null, token.user);
        }

        return done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'user',
  new JWTstrategy({
      secretOrKey: 'secret_password',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
