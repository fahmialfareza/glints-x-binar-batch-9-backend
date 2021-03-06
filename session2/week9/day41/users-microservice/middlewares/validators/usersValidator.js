const { check, validationResult, matchedData, sanitize } = require('express-validator'); //form validation & sanitize form params

module.exports = {
  // Signup validator
  signup: [
    check('email', 'email field must be email address').normalizeEmail().isEmail(), // validator for email field
    check('password', 'password field must have 8 to 32 characters').isString().isLength({ min: 8, max:32 }), // validator for password field
    check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field').exists().custom((value, { req }) => value === req.body.password), // validator for passwordConfirmation field
    (req, res, next) => {
      const errors = validationResult(req); // Collect errors from check function
      // If errors is not null, it will be return errors response
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }

      // If no errors, it will go to next step
      next();
    }
  ],
  login: [
    check('email', 'email field must be email address').normalizeEmail().isEmail(), // validator for email field
    check('password', 'password field must have 8 to 32 characters').isString().isLength({ min: 8, max:32 }), // validator for password field
    (req, res, next) => {
      const errors = validationResult(req); // Collect errors from check function
      // If errors is not null, it will be return errors response
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.mapped()
        });
      }

      // If no errors, it will go to next step
      next();
    }
  ]
};
