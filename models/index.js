const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/realtime_chart", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const vote = require('./vote');

module.exports = { vote };
