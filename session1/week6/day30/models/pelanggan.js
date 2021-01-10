const mongoose = require('mongoose') // Import mongoose
const mongoose_delete = require('mongoose-delete') // Import mongoose delete for soft delete

// Make pelanggan model
const PelangganSchema = new mongoose.Schema({
  // Define the column
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
  versionKey: false // disable version (__v column)
})

PelangganSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = pelanggan = mongoose.model('pelanggan', PelangganSchema, 'pelanggan'); // Exports pelanggan model
