const mongoose = require('mongoose') // import mongoose
const mongoose_delete = require('mongoose-delete') // import mongoose-delete to make soft delete

// Make pelanggan schema
const PelangganSchema = new mongoose.Schema({
  // Define column
  nama: {
    type: String,
    required: true
  }
}, {
  // Enable timestamps
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false // Disable __v column
})

PelangganSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = pelanggan = mongoose.model('pelanggan', PelangganSchema, 'pelanggan'); // Export pelanggan
