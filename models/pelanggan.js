const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const PelangganSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey:false
})

PelangganSchema.plugin(mongoose_delete, {overrideMethods: 'all'})

module.exports=pelanggan=mongoose.model('pelanggan', PelangganSchema, 'pelanggan')
