const index = require('./index.js')

function calculateVolumeCuboid(length, width, height) {
  return length * width * height
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

/* Start cara 1 */
function inputLength() {
  index.rl.question(`Length: `, length => {
    if (!isNaN(length) && !isEmptyOrSpaces(length)) {
      inputWidth(length)
    } else {
      console.log(`Length must be number\n`);
      inputLength()
    }
  })
}

function inputWidth(length) {
  index.rl.question(`Width: `, width => {
    if (!isNaN(width) && !isEmptyOrSpaces(width)) {
      inputHeight(length, width)
    } else {
      console.log(`Width must be number\n`);
      inputWidth(length)
    }
  })
}

function inputHeight(length, width) {
  index.rl.question(`Height: `, height => {
    if (!isNaN(height) && !isEmptyOrSpaces(height)) {
      console.log(`Cuboid's volume is ${calculateVolumeCuboid(length, width, height)}`);
      index.menu()
    } else {
      console.log(`Height must be number\n`);
      inputHeight(length, width)
    }
  })
}
/* end cara 1 */


/* start cara 2 */
function input() {
  index.rl.question(`Length: `, length => {
    index.rl.question(`Width: `, width => {
      index.rl.question(`Height: `, height => {
        if (!isNaN(length) && !isEmptyOrSpaces(length) && !isNaN(width) && !isEmptyOrSpaces(width) && !isNaN(height) && !isEmptyOrSpaces(height)) {
          console.log(`Cuboid's volume is ${calculateVolumeCuboid(length, width, height)}\n`);
          index.rl.close()
        } else {
          console.log(`Input must be number\n`);
          input()
        }
      })
    })
  })
}
/* end cara 2 */

module.exports.input = inputLength
