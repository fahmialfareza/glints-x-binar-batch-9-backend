const express = require('express');
const router = express.Router();
const VoteController = require('../controllers/voteController');

router.get('/', VoteController.home);

router.post('/vote', VoteController.vote);

// router.get('/data', VoteController.data);

module.exports = router;
