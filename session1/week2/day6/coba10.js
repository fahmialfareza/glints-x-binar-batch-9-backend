let a = 10;

let c = a == 10 ? "A is equal to 10" : "A is not equal to 10";

console.log(c); // A is equal to 10

let d = (a !== 10 || true) ? "A is not equal to 10, but okay" : "There's nothing right about it";
console.log(d); // A is not equal to 10, but okay

let e = a !== 10 ? "Hello" : "World";
console.log(e) // World
