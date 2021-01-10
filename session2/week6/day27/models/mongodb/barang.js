const mongoose = require("mongoose");  // Import mongoose
const mongoose_delete = require('mongoose-delete'); // Import mongoose-delete to make soft delete

// Make barang model
const BarangSchema = new mongoose.Schema({
  // Define column that we will used
  nama: {
    type: String,
    required: true
  },
  harga: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  pemasok: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  image: {
    type: String,
    default: null,
    required: false
  }
}, {
  // enable timestamps
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false // Disable versioning __v = 0
})

BarangSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // enable soft delete

module.exports = barang = mongoose.model('barang', BarangSchema, 'barang'); // export barang model
