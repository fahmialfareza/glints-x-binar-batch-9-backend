const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const goodRoutes = require('./routes/goodRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/', userRoutes);
app.use('/goods', goodRoutes);
app.use('/transactions', transactionRoutes)

app.listen(3000, () => console.log('Server running on localhost:3000'))
