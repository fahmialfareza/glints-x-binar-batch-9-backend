const {
  transaction
} = require('../mongodb/models')
const {
  good,
  user
} = require('../mysql/models');

class TransactionController {

  async getAll(req, res) {
    console.log(req.user.id);

    transaction.find({
      $or: [{
        'buyer.id': req.user.id
      }, {
        'seller.id': req.user.id
      }]
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    });
  }

  async getOne(req, res) {
    transaction.findOne({
      _id: req.params.id
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    })
  }

  async create(req, res) {
    const goods = await Promise.all([
      good.findOne({
        where: {
          id: req.body.good_id
        },
        attributes: ['id', 'name', 'price', 'image']
      }),
      good.findOne({
        where: {
          id: req.body.good_id
        },
        attributes: ['user_id']
      })
    ]);

    const data = await Promise.all([
      user.findOne({
        where: {
          id: req.user.id
        },
        attributes: ['id', 'email']
      }),
      user.findOne({
        where: {
          id: goods[1].user_id
        },
        attributes: ['id', 'email']
      })
    ]);

    const total = goods[0].price * req.body.quantity

    transaction.create({
      good: goods[0].dataValues,
      buyer: data[0].dataValues,
      seller: data[1].dataValues,
      quantity: eval(req.body.quantity),
      total: eval(total)
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    })
  }

  async update(req, res) {
    const goods = await Promise.all([
      good.findOne({
        where: {
          id: req.body.good_id
        },
        attributes: ['id', 'name', 'price', 'image']
      }),
      good.findOne({
        where: {
          id: req.body.good_id
        },
        attributes: ['user_id']
      })
    ]);

    const data = await Promise.all([
      user.findOne({
        where: {
          id: req.user.id
        },
        attributes: ['id', 'email']
      }),
      user.findOne({
        where: {
          id: goods[1].user_id
        },
        attributes: ['id', 'email']
      })
    ]);

    const total = goods[0].price * req.body.quantity

    transaction.findOneAndUpdate({
      _id: req.params.id
    }, {
      good: goods[0].dataValues,
      buyer: data[0].dataValues,
      seller: data[1].dataValues,
      quantity: eval(req.body.quantity),
      total: eval(total)
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    })
  }

  async delete(req, res) {
    transaction.delete({
      _id: req.params.id
    }).then(() => {
      res.status(200).json({
        message: 'success',
        data: null
      });
    });
  }

}

module.exports = new TransactionController;
