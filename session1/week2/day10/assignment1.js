/*
 * DON'T CHANGE
 * */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    data.push(createArrayElement())
  }

  // Recursive
  if (data.length == 0) {
    createArray();
  }
}

function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)]
}

createArray()

/*
 * Code Here!
 * */
console.log(`Old data = ${data}`);

function clean(data) {
  // Code here
  return data.filter(i => i != null);
}

/*
 * DON'T CHANGE
 * */

var newData = []

if (process.argv.slice(2)[0] == "test") {
  try {
    newData = clean(data)
    newData.forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null")
      }
    })
  }

  catch(err) {
    console.error(err.message);
  }
}

console.log(`New data = ${newData}`);
