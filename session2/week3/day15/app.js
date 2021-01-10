// Import expressjs to make API
const express = require('express') // Import expressjs
const app = express() // make instance object of expressjs
const indexRoutes = require('./routes/indexRoutes.js') // import hello Routes that will be used if we accessing localhost:3000/*
const helloRoutes = require('./routes/helloRoutes.js') // import index Routes that will be used if we accessing localhost:3000/hello/*

app.use(express.static('public')); // make static file like images, videos, css or others file in public directory

// If user access to localhost:3000/*
app.use('/', indexRoutes)

// If user access localhost:3000/hello this will be run
app.use('/hello', helloRoutes)

app.listen(3000) // will have port number 3000
