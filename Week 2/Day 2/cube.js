const index = require('./index.js')

function calculateVolumeCube(length) {
  return length ** 3
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function input() {
  index.rl.question(`Length: `, length => {
    if (!isNaN(length) && !isEmptyOrSpaces(length)) {
      console.log(`Cube's volume is ${calculateVolumeCube(length)}\n`);
      index.rl.close()
    } else {
      console.log(`Length must be number`);
      input()
    }
  })
}

module.exports.input = input
