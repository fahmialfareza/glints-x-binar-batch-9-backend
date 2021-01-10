const axios = require('axios'); // Import axios
const https = require('https'); // Import https
const good = require('../models').good; // Import good

// Declare GoodsController
class GoodsController {

  // Get all goods data
  async getAll(req, res) {
    try {
      // Get all goods
      let getGoods = await good.find({}, '_id name price supplier createdAt updatedAt');

      // Send all goods response
      return res.status(200).json({
        status: 'success get all suppliers',
        data: getGoods
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      });
    }
  }

  // Get one good data
  async getOne(req, res) {
    try {
      // Get one good
      let getGood = await good.findOne({
          _id: req.params.id
        },
        '_id name price supplier createdAt updatedAt'
      );

      // Send a good response
      return res.status(200).json({
        status: 'success get a good',
        data: getGood
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      });
    }
  }

  // Create a good
  async create(req, res) {
    try {
      // Make a agent to skip the SSL certificate
      const agent = new https.Agent({
        rejectUnauthorized: false
      });

      // Get supplier info from another service
      let getSupplierAPI = {
        method: 'get',
        url: `http://localhost:3001/suppliers/${req.body.supplier}`,
        headers: {
          'Authorization': req.header('Authorization')
        },
        httpsAgent: agent
      };

      // Get response from getSupplierAPI
      let responseGetSupplier = await axios(getSupplierAPI);

      // Get supplier data from the response
      let getSupplier = responseGetSupplier.data;

      // Create a good
      let createdGood = await good.create({
        name: req.body.name,
        price: req.body.price,
        supplier: getSupplier.data
      });

      // Find the good that have been made in advance
      let newGood = await good.findOne({
          _id: createdGood._id
        },
        '_id name price supplier createdAt updatedAt'
      );

      // Send a good that have been created response
      return res.status(200).json({
        status: 'success create a good',
        data: newGood
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      });
    }
  }

  // Update a good data
  async update(req, res) {
    try {
      // Make a agent to skip the SSL certificate
      const agent = new https.Agent({
        rejectUnauthorized: false
      });

      // Get supplier info from another service
      let getSupplierAPI = {
        method: 'get',
        url: `http://localhost:3001/suppliers/${req.body.supplier}`,
        headers: {
          'Authorization': req.header('Authorization')
        },
        httpsAgent: agent
      };

      // Get response from getSupplierAPI
      let responseGetSupplier = await axios(getSupplierAPI);

      // Get supplier data from the response
      let getSupplier = responseGetSupplier.data;

      // Update a good
      let updatedGood = await good.findOneAndUpdate({
        _id: req.params.id
      }, {
        $set: {
          name: req.body.name,
          price: req.body.price,
          supplier: getSupplier.data
        }
      }, {
        new: true,
        fields: {
          _id: 1,
          name: 1,
          price: 1,
          supplier: 1,
          createdAt: 1,
          updatedAt: 1
        }
      })

      // Send a supplier that have been updated response
      return res.status(200).json({
        status: 'success update a supplier',
        data: updatedGood
      })
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      })
    }
  }

  // Delete a good data
  async delete(req, res) {
    try {
      // Delete a good
      let deletedGood = await Promise.all([
        good.findOne({
            _id: req.params.id
          },
          '_id name createdAt updatedAt'
        ),
        good.delete({
          _id: req.params.id
        })
      ]);

      // Send a good that have been deleted response
      return res.status(200).json({
        status: 'success delete a supplier',
        data: deletedGood[0]
      })
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      })
    }
  }

}

module.exports = new GoodsController;
