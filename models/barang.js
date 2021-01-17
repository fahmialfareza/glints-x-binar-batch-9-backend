const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const BarangSchema = new mongoose.Schema({
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
    default: null,
    required: false,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
});

BarangSchema.path('image').get((v)=>{
  return '/img/'+v
})
BarangSchema.set('toJSON', {getters:true})

BarangSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = barang = mongoose.model('barang', BarangSchema, 'barang');
