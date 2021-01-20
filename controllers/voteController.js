const { vote } = require('../models');

class VoteController {

  async home(req, res) {
    try {
      return res.sendfile('index.html');
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        errors: err
      });
    }
  }

  async vote(req, res) {
    try {
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

      req.io.to(req.body.id).emit('vote', voteAggregated);

      return res.status(200).json({
        message: 'Successfully added.'
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        errors: err
      });
    }
  }

  async data(req, res) {
    try {
      let findData = await vote.find({});

      return res.json(findData);
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        errors: err
      });
    }
  }

}

module.exports = new VoteController();
