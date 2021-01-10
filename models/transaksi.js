const mongoose = require('mongoose') // Impoer mongoose
const mongoose_delete = require('mongoose-delete') // Import mongoose-delete for enable softdelete

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
    required: true
  },
  total: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  }
}, {
  // timestamps enable
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false // Disable versioning __v column
})

TransaksiSchema.plugin(mongoose_delete, { overrideMethods: 'all' }) // Enable softdelete

module.exports = transaksi = mongoose.model('transaksi', TransaksiSchema, 'transaksi'); // Export transaksi model
