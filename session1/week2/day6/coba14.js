const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* Calculate rectangle */
function rectangle(length, width) {
    return length * width
}
/* end Calculate rectangle */

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
            console.log(`\nRectangle : ${rectangle(length, width)}`);
            rl.close()
        } else {
            console.log(`Width must be a number\n`);
            inputWidth(length)
        }
    })
}

console.log(`Rectangle`)
console.log(`=========`);
inputLength()
