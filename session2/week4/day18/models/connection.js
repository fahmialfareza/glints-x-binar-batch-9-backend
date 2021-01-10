const mysql = require('mysql') // Import mysql

// Make mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fahmialfareza',
  password: '1@2w3E4r',
  database: 'penjualan'
})

module.exports = connection; // export connection
