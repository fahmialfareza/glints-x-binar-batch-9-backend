const express = require('express') // Import Express
const app = express() // Create app from express
const transaksiRoutes = require('./routes/transaksiRoutes.js') // Import transaksiRoutes

app.use(express.urlencoded({extended:false}))

app.use('/transaksi', transaksiRoutes) // If accessing localhost:3000/transaksi/*, it will use transaksiRoutes

app.listen(3000) // make application have port 3000
