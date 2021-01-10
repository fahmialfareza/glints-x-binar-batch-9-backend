const index = require('../index.js')

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function calculateRectangularPrism(length, width, height) {
    return length * width * height
}

/* start Cara Satu */
function inputLength() {
    index.rl.question(`Length: `, length => {
        if (!isNaN(length) && !isEmptyOrSpaces(length)) {
            inputWidth(length)
        } else {
            console.log(`Length must be number!\n`);
            inputLength()
        }
    })
}

function inputWidth(length) {
    index.rl.question(`Width: `, width => {
        if (!isNaN(width) && !isEmptyOrSpaces(width)) {
            inputHeight(length, width)
        } else {
            console.log(`Width must be number!\n`);
            inputWidth(length)
        }
    })
}

function inputHeight(length, width) {
    index.rl.question(`Height: `, height => {
        if (!isNaN(height) && !isEmptyOrSpaces(height)) {
            console.log(`Rectangular Prims Volume is ${calculateRectangularPrism(length, width, height)}\n`);
            index.menu()
        } else {
            console.log(`Height must be number!\n`);
            inputHeight(length, width)
        }
    })
}
/* end Cara Satu */

/* Start Cara 2 */
function input() {
    index.rl.question(`Length: `, length => {
        index.rl.question(`Width: `, width => {
            index.rl.question(`Height: `, height => {
                if (!isNaN(length) && !isNaN(width) && !isNaN(height) && !isEmptyOrSpaces(length) && !isEmptyOrSpaces(width) && !isEmptyOrSpaces(height)) {
                    console.log(`Rectangular Prims Volume is ${calculateRectangularPrism(length, width, height)}\n`);
                    index.menu()
                } else {
                    console.log(`Input must be number!\n`);
                    input()
                }
            })
        })
    })
}
/* Start Cara 2 */

module.exports.inputcara1 = inputLength
module.exports.inputcara2 = input
