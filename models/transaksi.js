const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const TransaksiSchema = new mongoose.Schema({
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
    required:true
  },
  status: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  redirect_url: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
})

TransaksiSchema.plugin(mongoose_delete, {overrideMethods: 'all'})

module.exports = transaksi = mongoose.model('transaksi', TransaksiSchema, 'transaksi')
