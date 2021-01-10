const EventEmitter = require('events'); // Import
// Initialize an instance because it is a class
const my = new EventEmitter();

my.on('wawan', function() {
  console.log(`Hello I'm Wawan`);
})

my.on('wawan', function() {
  console.log('Firman');
  console.log('Hi, Firman!');
})

my.on('wawan', function() {
  console.log('Raka');
  console.log('Hi, Raka');
})

my.emit('wawan')
