const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const cuboid = require('./cuboid.js')
const cube = require('./cube.js')

function menu() {
  console.log(`Menu`);
  console.log(`====`);
  console.log(`1. Cuboid`);
  console.log(`2. Cube`);
  console.log(`3. Exit`);
  rl.question(`Choose option: `, option => {
    switch (Number(option)) {
      case 1:
        cuboid.input()
        break;
      case 2:
        cube.input()
        break;
      case 3:
        rl.close()
        break
      default:
        console.log(`Option must be 1 to 3!\n`);
        menu()
    }
  })
}

menu()


module.exports.rl = rl
module.exports.menu = menu
