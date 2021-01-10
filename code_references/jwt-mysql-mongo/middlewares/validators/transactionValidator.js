const {
  transaction
} = require('../../mongodb/models');
const {
  good
} = require('../../mysql/models');
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

module.exports = {
  getOne: [
    check('id').custom((value, {
      req
    }) => {
      return transaction.findOne({
        $and: [{
            _id: value
          },
          {
            $or: [{
              'buyer.id': req.user.id
            }, {
              'seller.id': req.user.id
            }]
          }
        ]
      }).then(result => {
        if (!result) {
          throw new Error('Transaction is not found!')
        }
      })
    }),
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
  create: [
    check('good_id').isNumeric().custom(value => {
      return good.findOne({
        where: {
          id: value
        }
      }).then(result => {
        if (!result) {
          throw new Error('Good is not found!')
        }
      })
    }),
    check('quantity').isNumeric(),
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
  update: [
    check('id').custom((value, {
      req
    }) => {
      console.log(value);
      return transaction.findOne({
        _id: value,
        'buyer.id': req.user.id
      }).then(result => {
        if (!result) {
          throw new Error('Transaction is not found!')
        }
      })
    }),
    check('good_id').isNumeric().custom(value => {
      return good.findOne({
        where: {
          id: value
        }
      }).then(result => {
        if (!result) {
          throw new Error('Good is not found!')
        }
      })
    }),
    check('quantity').isNumeric(),
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
  delete: [
    check('id').custom((value, {
      req
    }) => {
      return transaction.findOne({
        _id: value,
        'buyer.id': req.user.id
      }).then(result => {
        if (!result) {
          throw new Error('Transaction is not found!')
        }
      })
    }),
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
