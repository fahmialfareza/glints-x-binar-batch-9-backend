const express = require('express');
const router = express.Router();
const HelloController = require('../controllers/helloController');

router.get('/', HelloController.home);
router.get('/pudji', HelloController.pudji);

module.exports = router;
