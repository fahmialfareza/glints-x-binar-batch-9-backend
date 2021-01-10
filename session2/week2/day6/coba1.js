let message = "Hello";

function hello() {
  let message = "Hello World"; // Local Variable
  console.log(message);
}

function globalhello() {
  let message = "Hello dalam!"
  console.log(message);
}

hello()
// Hello World

globalhello()

console.log(message)
// ReferenceError: message is not defined
