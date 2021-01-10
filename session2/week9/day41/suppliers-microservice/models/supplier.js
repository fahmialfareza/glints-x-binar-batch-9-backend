const mongoose = require("mongoose"); // Import mongoose
const mongoose_delete = require('mongoose-delete'); // Import mongoose-delete

// Create schema for Supplier
const SupplierSchema = new mongoose.Schema({
  // name field/column
  name: {
    type: String,
    required: true
  }
}, {
  // Enable timestamps
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  versionKey: false // It will disable the versionKey (_v column)
});

SupplierSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // Enable softdelete

module.exports = supplier = mongoose.model('supplier', SupplierSchema); // Export supplier model
