// Import express
const express = require('express') // Express used to make API
const router = express.Router() // We need Router to make API in this folder
const HelloController = require('../controllers/helloController.js') // Use HelloController to call the function

router.get('/', HelloController.hello) // If we run localhost:3000/hello, we will redirect to function hello in HelloController class

module.exports = router; // Exporting router that can be used in app.js
