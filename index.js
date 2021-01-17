// Dependency
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { vote } = require('./models');
const voteRoutes = require('./routes/voteRoutes');

// Config
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(async function(req, res, next) {
  req.io = io;
  next();
});

// Tell express where to serve static files from
app.use(express.static(__dirname + '/public'));

app.use('/', voteRoutes);

/*
Socket.io Setting
*/
io.on('connection', async function(socket) {

  await vote.aggregate([{
      "$group": {
        "_id": "$name",
        "total_vote": {
          "$sum": 1
        }
      }
    }],
    async function(err, results) {
      if (err) throw err;

      socket.emit('vote', results);
    }
  );
});

// Start
server.listen(3000);
console.log('Open http://localhost:3000');
