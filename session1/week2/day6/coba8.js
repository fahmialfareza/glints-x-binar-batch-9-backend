let a = 1 == 2; // false

console.log(a);

let b = "1" === 1; // false

console.log(b);

/*
  "1" will be converted into 1
  1 remain the same

  or

  "1" will remain the same
  1 will be converted into "1"
*/
let c = "1" == 1; // true
console.log(c);
