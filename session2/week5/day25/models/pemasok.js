const mongoose = require('mongoose') // import mongoose
const mongoose_delete = require('mongoose-delete') // import mongoose-delete to make soft delete

// Make pemasok schema
const PemasokSchema = new mongoose.Schema({
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

PemasokSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = pemasok = mongoose.model('pemasok', PemasokSchema, 'pemasok'); // Export pemasok
