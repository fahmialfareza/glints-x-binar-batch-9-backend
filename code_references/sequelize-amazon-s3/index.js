// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //post body handler
const bookRoutes = require('./routes/bookRoutes.js')

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/', bookRoutes)

app.listen(3000, () => console.log("server berjalan pada http://localhost:3000"))
