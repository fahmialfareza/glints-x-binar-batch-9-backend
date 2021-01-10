const EventEmitter = require('events')
const my = new EventEmitter()

function lari() {
  console.log('lari!');
}

function jogging() {
  console.log('jogging!');
}

function menendang() {
  console.log('menendang');
}

function tangkap() {
  console.log('tangkap');
}

my.on('Main Bola', function() {
  console.log('\nMain Bola');
  lari()
  jogging()
  menendang()
  tangkap()
})

my.on('Main Basket', function() {
  console.log('\nMain Basket');
  lari()
  jogging()
  tangkap()
})

my.emit('Main Bola')
my.emit('Main Basket')
