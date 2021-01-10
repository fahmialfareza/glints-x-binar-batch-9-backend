let a = "asdasd"
let b = 5

// console.log(!isNaN(a));
// console.log(!isNaN(b));


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

let c = ","
let d = " "
console.log(!isEmptyOrSpaces(c));
