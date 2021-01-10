const {pemasok} = require('../../models');
const {check, validationResult, matchedData, sanitize} = require('express-validator');

module.exports = {
  getOne:[
    check('id').custom(value=>{
      return pemasok.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pemasok tidak ada!')
        }
      })
    }),
    (req,res,next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors:errors.mapped()
        })
      }
      next();
    }
  ],
  create:[
    check('nama').isString(),
    (req,res,next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors:errors.mapped()
        })
      }
      next();
    }
  ],
  update:[
    check('id').custom(value=>{
      return pemasok.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pemasok tidak ada!')
        }
      })
    }),
    check('nama').isString(),
    (req,res,next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors:errors.mapped()
        })
      }
      next();
    }
  ],
  delete:[
    check('id').custom(value=>{
      return pemasok.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pemasok tidak ada!')
        }
      })
    }),
    (req,res,next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors:errors.mapped()
        })
      }
      next();
    }
  ]
}
