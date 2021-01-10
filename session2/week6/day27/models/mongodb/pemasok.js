const mongoose = require('mongoose') // Import mongoose
const mongoose_delete = require('mongoose-delete') // Import mongoose delete for soft delete

// Make pemasok model
const PemasokSchema = new mongoose.Schema({
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

PemasokSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = pemasok = mongoose.model('pemasok', PemasokSchema, 'pemasok'); // Exports pemasok model
