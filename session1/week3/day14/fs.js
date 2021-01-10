// Import fs module
const fs = require('fs');

const readFile = options => file => {
  fs.readFile(file, options, (error, content) => {
    if (error) {
      throw error
    }

    return content
  })
}

let content1 = readFile('utf-8')('contents/content.txt')
let content2 = readFile('utf-8')('contents/content2.txt')
let heru = readFile('utf-8')('contents/wawan.txt')

console.log(content1);
console.log(content2);
console.log(heru);
