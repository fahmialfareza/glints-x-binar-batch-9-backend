const mongoose = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const TransactionSchema = new mongoose.Schema({
  good: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  buyer: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  total: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionKey: false
});

TransactionSchema.plugin(mongoose_delete, {
  overrideMethods: 'all'
});

module.exports = transaction = mongoose.model("transaction", TransactionSchema);
