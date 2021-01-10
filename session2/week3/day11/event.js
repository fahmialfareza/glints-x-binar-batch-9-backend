const EventEmitter = require('events')
const my = new EventEmitter()

my.on('Panggil', function() {
  console.log('Panggil Heru');
  console.log('Heru bilang halo');
})

my.on('Panggil', function() {
  console.log('Farida');
})

my.emit('Panggil') // request
