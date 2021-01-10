const {
  good
} = require('../mysql/models');

class GoodController {

  async getAll(req, res) {
    good.findAll().then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    })
  }

  async getOne(req, res) {
    good.findOne({
      id: req.params.id
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    });
  }

  async create(req, res) {
    good.create({
      name: req.body.name,
      price: req.body.price,
      user_id: req.user.id,
      image: req.file === undefined ? "" : req.file.filename
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      });
    });
  }

  async update(req, res) {
    let image;
    if (req.file !== undefined) {
      image = req.file.filename
    };

    good.update({
      name: req.body.name,
      price: req.body.price,
      image: image
    }, {
      where: {
        id: req.params.id
      }
    }).then(() => {
      return good.findOne({
        id: req.params.id
      })
    }).then(result => {
      res.status(200).json({
        message: 'success',
        data: result
      })
    });
  }

  async delete(req, res) {
    good.destroy({ // Delete data from Transaksi table
      where: {
        id: req.params.id // Where id of Transaksi table is equal to req.params.id
      }
    }).then(affectedRow => {
      // If delete success, it will return this JSON
      if (affectedRow) {
        res.status(200).json({
          message: 'success',
          data: null
        });
      }

      // If failed, it will return this JSON
      res.status(500).json({
        message: 'error',
        data: null
      });
    });
  }

}

module.exports = new GoodController;
