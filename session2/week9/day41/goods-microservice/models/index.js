const mongoose = require('mongoose'); // Import mongoose

const uri = "mongodb://localhost:27017/goods"; // goods database mongodb

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }) // Connect to mongodb database

const good = require('./good'); // Import good model

module.exports = { good }; // Export goos model
