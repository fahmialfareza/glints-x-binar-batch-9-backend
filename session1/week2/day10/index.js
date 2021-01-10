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
  // length = data.length
  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < length - i; j++) {
  //     if (data[j] > data[j + 1]) {
  //       [data[j], data[j + 1]] = [data[j + 1], data[j]]
  //     }
  //   }
  // }
  return data.sort(function(a, b){return a-b});
}

// Should return array
function sortDecending(data) {
  // Code Here
  var data = clean(data)
  // length = data.length
  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < length - i; j++) {
  //     if (data[j] < data[j + 1]) {
  //       [data[j], data[j + 1]] = [data[j + 1], data[j]]
  //     }
  //   }
  // }
  return data.sort(function(a, b){return b-a});
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
