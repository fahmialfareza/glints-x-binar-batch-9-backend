const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/ecommerce_development"

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

const transaction = require('./transaction.js')

module.exports = { transaction };
