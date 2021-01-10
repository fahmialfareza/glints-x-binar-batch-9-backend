const index = require('../index.js')

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function calculateCube(length) {
    return length ** 3
}

function input() {
    index.rl.question(`Length: `, length => {
        if (!isNaN(length) && !isEmptyOrSpaces(length)) {
            console.log(`Cube's volume is ${calculateCube(length)}\n`);
            index.menu()
        } else {
            console.log(`Length must be number\n`);
            input()
        }
    })
}

module.exports.input = input
