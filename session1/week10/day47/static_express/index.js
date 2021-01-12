const express = require('express');
const app = express();

const helloRoutes = require('./routes/helloRoutes');

app.use('/', helloRoutes);

app.listen(3000);
