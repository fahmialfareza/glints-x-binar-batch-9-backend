const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')

const PemasokSchema = new mongoose.Schema({
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

PemasokSchema.plugin(mongoose_delete, {overrideMethods: 'all'})

module.exports=pemasok=mongoose.model('pemasok', PemasokSchema, 'pemasok')
