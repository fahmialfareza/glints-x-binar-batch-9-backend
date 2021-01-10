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
    if (!isNaN(option)) {
      if (option == 1) {
        cuboid.input()
      } else if (option == 2) {
        cube.input()
      } else if (option == 3) {
        rl.close()
      } else {
        console.log(`Option must be 1 to 3!\n`);
        menu()
      }
    } else {
      console.log(`Option must be number!\n`);
      menu()
    }
  })
}

menu()


module.exports.rl = rl
