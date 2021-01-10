const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here
  var data = clean(data)
  return data.sort(function(a, z){return a - z});
}

// Should return array
function sortDecending(data) {
  // Code Here
  var data = clean(data)
  var data = clean(data)
  return data.sort(function(a, z){return z - a});
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
