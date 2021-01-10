// Importing Module
const index = require('./index')
const cube = require('./cube')
const beam = require('./beam')

/* start input Cube */
function inputCubeLength() {
    index.rl.question(`Cube's length: `, length => {
        if (!isNaN(length)) {
            console.log(`Cube's volume is ${cube.calculate(length)} cm3 \n`)
            index.menu()
        } else {
            console.log(`Cube's length must be number \n`);
            inputCubeLength()
        }
    });
}
/* end input Cube */


/* start input Beam */
function inputBeamLength() {
    index.rl.question(`Beam's length: `, length => {
        if (!isNaN(length)) {
            inputBeamWidth(length)
        } else {
            console.log(`Beam's length must be number \n`);
            inputBeamLength()
        }
    })
}

function inputBeamWidth(length) {
    index.rl.question(`Beam's width: `, width => {
        if (!isNaN(width)) {
            inputBeamHeight(length, width)
        } else {
            console.log(`Beam's width must be number \n`);
            inputBeamWidth(length)
        }
    })
}

function inputBeamHeight(length, width) {
    index.rl.question(`Beam's height: `, height => {
        if (!isNaN(height)) {
            console.log(`Beam's volume is ${beam.calculate(length, width, height)} cm3 \n`)
            index.menu()
        } else {
            console.log(`Beam's width must be number \n`);
            inputBeamHeight(length, width)
        }
    })
}
/* end input Beam */

module.exports.inputCube = inputCubeLength;
module.exports.inputBeam = inputBeamLength;
