const { MongoClient } = require('mongodb') // Import mongodb

const uri = 'mongodb://localhost:27017' // uri of mongodb in our computer for connection
const client = new MongoClient(uri, { useUnifiedTopology: true }) // Make new client / connection

client.connect() // Make connection to mongodb

module.exports = client; // Export client / connection
