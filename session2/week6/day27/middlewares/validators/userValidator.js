const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

module.exports = {
  signup: [
    check('email', 'email field must be email address').normalizeEmail().isEmail(), // email must be email
    check('password', 'password field must have 8 to 32 characters').isString().isLength({ min: 8, max:32 }), // password must be 8 to 32 chars
    check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field').exists()
    .custom((value, {req}) => value === req.body.password),
    check('role').isString(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next();
    }
  ],
  login: [
    check('email', 'email field must be email address').normalizeEmail().isEmail(), // email must be email
    check('password', 'password field must have 8 to 32 characters').isString().isLength({ min: 8, max:32 }), // password must be 8 to 32 chars
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }
      next();
    }
  ]
};
