const mongoose = require('mongoose') // import mongoose
const mongoose_delete = require('mongoose-delete') // import mongoose-delete to make soft delete

// barang schema
const BarangSchema = new mongoose.Schema({
  // Define column
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
    required: false,
    default: null
  }
}, {
  // Enable timestamps
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false // Disable __v column
})

BarangSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = barang = mongoose.model('barang', BarangSchema, 'barang'); // Export barang model
