// Importing Module
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const cube = require('./cube')
const beam = require('./beam')
const input = require('./input')

function menu() {
    console.log(`Menu`);
    console.log(`1. Calculate Cube's Volume`);
    console.log(`2. Calculate Beam's Volume`);
    console.log(`3. Exit`);
    console.log(`\n`);
    rl.question(`Choose Option: `, option => {
        choosenOption(option)
    })
}

function choosenOption(option) {
    if (!isNaN(option)) {
        if (option == 1) {
            input.inputCube()
        } else if (option == 2) {
            input.inputBeam()
        } else if (option == 3) {
            rl.close()
        } else {
            menu()
        }
    } else {
        console.log(`Option must be number \n`);
        menu()
    }
}

menu()

module.exports.menu = menu
module.exports.rl = rl
