const express = require('express');
const cobaController = require('../controllers/cobaController');

const router = express();

router.get('/hello', cobaController.hello);

module.exports = router;
