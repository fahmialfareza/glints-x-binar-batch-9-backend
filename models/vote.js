const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String
});

const vote = mongoose.model('vote', schema);

module.exports = vote;
