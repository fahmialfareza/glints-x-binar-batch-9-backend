const mongoose = require('mongoose'); // Import mongoose

const uri = "mongodb://localhost:27017/suppliers"; // suppliers database mongodb

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }); // Connect to mongodb database

const supplier = require('./supplier'); // Import supplier model

module.exports = { supplier }; // Export supplier model
