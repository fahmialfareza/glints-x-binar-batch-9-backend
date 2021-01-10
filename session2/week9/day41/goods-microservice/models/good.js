const mongoose = require("mongoose"); // Import mongoose
const mongoose_delete = require('mongoose-delete'); // Import mongoose-delete

// Create schema for Good
const GoodSchema = new mongoose.Schema({
  // name field/column
  name: {
    type: String,
    required: true
  },
  // price field
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  // supplier field
  supplier: {
    type: mongoose.Schema.Types.Mixed,
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

GoodSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // Enable softdelete

module.exports = good = mongoose.model('good', GoodSchema); // Export good model
