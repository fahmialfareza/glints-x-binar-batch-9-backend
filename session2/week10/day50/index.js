const express = require('express');
const cobaRoutes = require('./routes/cobaRoutes');

const app = express();

app.use('/', cobaRoutes);

app.listen(3000);

module.exports = app;
