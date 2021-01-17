const { vote } = require('../models');

class VoteController {

  async home(req, res) {
    res.sendfile('index.html');
  }

  async vote(req, res) {
    let newVote = await vote.create({
      name: req.body.name
    })

    let voteAggregated = await vote.aggregate([
      {
        "$group": {
          "_id": "$name",
          "total_vote": {
            "$sum": 1
          }
        }
      }
    ]);

    req.io.sockets.emit('vote', voteAggregated);

    return res.status(200).json({
      'message': 'Successfully added.'
    });
  }

  async data(req, res) {
    let find = await vote.find({});

    return res.json(find);
  }

}

module.exports = new VoteController();
