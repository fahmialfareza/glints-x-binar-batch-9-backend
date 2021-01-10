/* Ini adalah let */
let a = 10;
console.log(a);

// Or
// let a;
a = 5; // This was called assignment

console.log(a);


/* Ini adalah var */
var c = 10;
console.log(c + a);

// Or
var c; // This was called redeclaration
c = 4; // This was called assignment as well
console.log(c + a);


/* Ini adalah const */
const z = 10; // Declare a variable called z

console.log(z);
// z = 20;

/*
Thrown:
TypeError: Assignment to constant variable. */

var k = 5;
var k;
console.log(k);
