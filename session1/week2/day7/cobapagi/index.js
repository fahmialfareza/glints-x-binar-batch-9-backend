const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const rectangularPrism = require('./resources/rectangularPrism.js')
const cube = require('./resources/cube.js')

function menu() {
    console.log(`Menu`);
    console.log(`====`);
    console.log(`1. Rectangular Prism`);
    console.log(`2. Cube`);
    console.log(`3. Exit`);
    rl.question(`Choose option: `, option => {
        switch (Number(option)) {
          case 1:
            rectangularPrism.inputcara1()
            break;
          case 2:
            cube.input()
            break;
          case 3:
            rl.close()
            break;
          default:
            menu()
        }
    })
}

menu()

module.exports.rl = rl
module.exports.menu = menu
