const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const pi = 3.14;

function beam(length, width, height) {
    return length * width * height
}

/* Start Cara 1 */
function inputLength() {
    rl.question(`Length: `, length => {
        if (!isNaN(length)) {
            inputWidth(length)
        } else {
            console.log(`Length must be a number\n`);
            inputLength()
        }
    })
}

function inputWidth(length) {
    rl.question(`Width: `, width => {
        if (!isNaN(width)) {
            inputHeight(length, width)
        } else {
            console.log(`Width must be a number\n`);
            inputWidth(length)
        }
    })
}

function inputHeight(length, width) {
  rl.question(`Height: `, height => {
      if (!isNaN(height)) {
          console.log(`\nBeam: ${beam(length, width, height)}`);
          rl.close()
      } else {
          console.log(`Height must be a number\n`);
          inputHeight(length, width)
      }
  })
}
/* End Cara 1 */

/* Start Cara 2 */
function input() {
    rl.question('Length: ', length => {
        rl.question('Width: ', width => {
            rl.question('Height: ', height => {
                if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
                    console.log(`\nBeam: ${beam(length, width, height)}`);
                    rl.close()
                } else {
                    console.log(`Length, Width and Height must be a number\n`);
                    input()
                }
            })
        })
    })
}
/* End Cara 2 */

console.log(`Rectangle`);
console.log(`=========`);
inputLength() // Cara 1
// input() // Cara 2
