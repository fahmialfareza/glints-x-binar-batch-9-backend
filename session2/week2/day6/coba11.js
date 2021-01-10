// let a = 1;
// let b = 2;
//
// let c = 5;
// let d = 5;
//
// console.log(a == b || c == d); // true


// let a = null; //false
// let b = undefined
// let c = "Hello"
// let d = 18
// let e = a || b || d || c;
//
// console.log(e) // A is empty, so I took the place




let a = 10;

let c = a == 11 ? "A is equal to 10" : "A is not equal to 10";

console.log(c); // A is equal to 10

let d = (a !== 10 || true) ? "A is not equal to 10, but okay" : "There's nothing right about it";
console.log(d); // A is not equal to 10, but okay

let e = a !== 10 ? "Hello" : "World";
console.log(e) // World
