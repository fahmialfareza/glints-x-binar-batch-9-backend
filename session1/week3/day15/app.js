// Import express
const express = require('express') // Import express module
const app = express() // make express app from express to make API
const helloRoutes = require('./routes/helloRoutes.js') // import hello Routes that will be used if we accessing localhost:3000/*
const indexRoutes = require('./routes/indexRoutes.js') // import index Routes that will be used if we accessing localhost:3000/hello/*

app.use(express.static('public')); // use public directory for images or css or other files

// If the user request to url localhost:3000/*
app.use('/', indexRoutes)

// If the user request to url localhost:3000/hello/*
app.use('/hello', helloRoutes)

app.listen(3000) // will be have port 3000
