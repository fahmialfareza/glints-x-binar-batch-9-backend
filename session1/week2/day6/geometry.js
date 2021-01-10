// Importing Module
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function calculateCubeVolume(length) {
    return length ** 3
}

function calculateBeamVolume(length, width, height) {
    return length * width * height
}

/* start input Cube */
function inputCubeLength() {
    rl.question(`Cube's length: `, length => {
        if (!isNaN(length)) {
            console.log(`Cube's volume is ${calculateCubeVolume(length)} cm3 \n`)
            menu()
        } else {
            console.log(`Cube's length must be number \n`);
            inputCubeLength()
        }
    });
}
/* end input Cube */


/* start input Beam */
function inputBeamLength() {
    rl.question(`Beam's length: `, length => {
        if (!isNaN(length)) {
            inputBeamWidth(length)
        } else {
            console.log(`Beam's length must be number \n`);
            inputBeamLength()
        }
    })
}

function inputBeamWidth(length) {
    rl.question(`Beam's width: `, width => {
        if (!isNaN(width)) {
            inputBeamHeight(length, width)
        } else {
            console.log(`Beam's width must be number \n`);
            inputBeamWidth(length)
        }
    })
}

function inputBeamHeight(length, width) {
    rl.question(`Beam's height: `, height => {
        if (!isNaN(height)) {
            console.log(`Beam's volume is ${calculateBeamVolume(length, width, height)} cm3 \n`)
            menu()
        } else {
            console.log(`Beam's width must be number \n`);
            inputBeamHeight(length, width)
        }
    })
}
/* end input Beam */

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
            inputCubeLength()
        } else if (option == 2) {
            inputBeamLength()
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
