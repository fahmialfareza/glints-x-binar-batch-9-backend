// Import express
const express = require('express') // Express used to make API
const router = express.Router()  // We need Router to make API in this folder
const IndexController = require('../controllers/indexController.js') // Use HelloController to call the function

router.get('/', IndexController.home) // If we run localhost:3000, we will redirect to function home in IndexController class
router.get('/index', IndexController.indexHome) // If we run localhost:3000, we will redirect to function indexHome in IndexController class

module.exports = router; // Exporting router that can be used in app.js
