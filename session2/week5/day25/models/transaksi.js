const mongoose = require('mongoose') // import mongoose
const mongoose_delete = require('mongoose-delete') // import mongoose-delete to make soft delete

// Make transaksi schema
const TransaksiSchema = new mongoose.Schema({
  // Define column
  barang: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  pelanggan: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  jumlah: {
    type: Number,
    require: true
  },
  total: {
    type: mongoose.Schema.Types.Decimal128,
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

TransaksiSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = transaksi = mongoose.model('transaksi', TransaksiSchema, 'transaksi'); // Exports transaksi model
