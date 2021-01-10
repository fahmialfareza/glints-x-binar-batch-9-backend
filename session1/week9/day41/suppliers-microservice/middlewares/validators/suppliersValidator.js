const { check, validationResult, matchedData, sanitize } = require('express-validator'); //form validation & sanitize form params
const supplier = require('../../models').supplier; // Import supplier model

// Function to check, is hexa number or not
function returnHexaNumber(s) {
    var regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;
    return (typeof s === 'string' && regExp.test(s));
}

module.exports = {
  // validator for get one data
  getOne: [
    // It will check is supplier exist or not
    check('id').custom(async (value, { req }) => {
      try {
        // Check is 24 characters and is a hexa number?
        if ((value.length != 24) || !returnHexaNumber(value)) {
          throw new Error("ID should be have 24 characters and hexa decimal number!");
        }

        // Find the supplier by id
        let getSupplier = await supplier.findOne({
          _id: value
        })

        // If supplier is not found, it will make a message of error
        if (!getSupplier) {
          throw new Error("Supplier isn't exist!");
        }
      } catch (e) {
        // If error it will make a message of error
        throw new Error(e);
      }
    }),
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
  create: [
    check('name', 'name have 8 to 32 characters').isString().isLength({ min: 8, max:32 }), // Check name field
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
  update: [
    // It will check is supplier exist or not
    check('id').custom(async (value, { req }) => {
      try {
        // Check is 24 characters and is a hexa number?
        if ((value.length != 24) || !returnHexaNumber(value)) {
          throw new Error("ID should be have 24 characters and hexa decimal number!");
        }

        // Find the supplier by id
        let getSupplier = await supplier.findOne({
          _id: value
        })

        // If supplier is not foundm it will make a message of error
        if (!getSupplier) {
          throw new Error("Supplier isn't exist!");
        }
      } catch (e) {
        // If error it will make a message of error
        throw new Error(e);
      }
    }),
    check('name', 'name have 8 to 32 characters').isString().isLength({ min: 8, max:32 }),
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
  delete: [
    // It will check is supplier exist or not
    check('id').custom(async (value, { req }) => {
      try {
        // Check is 24 characters and is a hexa number?
        if ((value.length != 24) || !returnHexaNumber(value)) {
          throw new Error("ID should be have 24 characters and hexa decimal number!");
        }

        // Find the supplier by id
        let getSupplier = await supplier.findOne({
          _id: value
        })

        // If supplier is not foundm it will make a message of error
        if (!getSupplier) {
          throw new Error("Supplier isn't exist!");
        }
      } catch (e) {
        // If error it will make a message of error
        throw new Error(e);
      }
    }),
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
};
