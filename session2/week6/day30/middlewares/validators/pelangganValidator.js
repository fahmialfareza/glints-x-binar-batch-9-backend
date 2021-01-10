const {pelanggan} = require('../../models/mongodb');
const {check, validationResult, matchedData, sanitize} = require('express-validator');

module.exports = {
  getOne:[
    check('id').custom(value=>{
      return pelanggan.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pelanggan tidak ada!')
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
      return pelanggan.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pelanggan tidak ada!')
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
      return pelanggan.findOne({
        _id:value
      }).then(result=>{
        if (result.length==0) {
          throw new Error('ID pelanggan tidak ada!')
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
