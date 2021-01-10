function amIUnderage(age) {
  if (typeof age !== 'number') // To check if it's not a number
    throw new Error(`Expecting number, but got a ${typeof age}`);

  /*
    If the input was right, it will return the result of this operation
  */

  return age < 18; // Just basic operation
}

console.log(amIUnderage(18)); // false
console.log(amIUnderage(12)); // true
// amIUnderage("Hello World");
// Error: Expecting number, but got a string
