const supplier = require('../models').supplier; // Import supplier models

// Declare SuppliersController class
class SuppliersController {

  // Get all suppliers data
  async getAll(req, res) {
    try {
      // Get all suppliers
      let getSuppliers = await supplier.find({}, '_id name createdAt updatedAt');

      // Send all suppliers response
      return res.status(200).json({
        status: 'success get all suppliers',
        data: getSuppliers
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'Error',
        errors: e
      });
    }
  }

  // Get one supplier data
  async getOne(req, res) {
    try {
      // Get one supplier
      let getSupplier = await supplier.findOne({
          _id: req.params.id
        },
        '_id name createdAt updatedAt'
      );

      // Send a supplier response
      return res.status(200).json({
        status: 'success get a supplier',
        data: getSupplier
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      });
    }
  }

  // Create a supplier
  async create(req, res) {
    try {
      // Create a suplier
      let createdSupplier = await supplier.create({
        name: req.body.name
      });

      // Find the supplier that have been made in advance
      let newSupplier = await supplier.findOne({
          _id: createdSupplier._id
        },
        '_id name createdAt updatedAt'
      );

      // Send a supplier that have been created response
      return res.status(200).json({
        status: 'success create a supplier',
        data: newSupplier
      });
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      });
    }
  }

  // Update a supplier
  async update(req, res) {
    try {
      // Update a supplier
      let updatedSupplier = await supplier.findOneAndUpdate({
        _id: req.params.id
      }, {
        $set: {
          name: req.body.name
        }
      }, {
        new: true,
        fields: {
          _id: 1,
          name: 1,
          createdAt: 1,
          updatedAt: 1
        }
      })

      // Send a supplier that have been updated response
      return res.status(200).json({
        status: 'success update a supplier',
        data: updatedSupplier
      })
    } catch (e) {
      // If errors, it will return Internal Server Error and send error message
      return res.status(500).json({
        status: 'error',
        errors: e
      })
    }
  }

  // Delete a supplier data
  async delete(req, res) {
    try {
      // Delete a supplier
      let deletedSupplier = await Promise.all([
        supplier.findOne({
            _id: req.params.id
          },
          '_id name createdAt updatedAt'
        ),
        supplier.delete({
          _id: req.params.id
        })
      ]);

      // Send a supplier that have been deleted response
      return res.status(200).json({
        status: 'success delete a supplier',
        data: deletedSupplier[0]
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

module.exports = new SuppliersController; // Export SuppliersController
