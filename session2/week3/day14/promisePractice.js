// Import fs module
const fs = require('fs');

/* Start make promise object */
const readFile = (file, options) => new Promise((fulfill, reject) => {
  fs.readFile(file, options, (error, content) => {
    if (error) {
      return reject(error)
    }

    return fulfill(content)
  })
})
/* Promise object end */

console.log(readFile('contents/content1.txt', 'utf-8'));

/* Start promise object */
readFile('contents/content1.txt', 'utf-8') // read file content1.txt
  .then(content => {
    console.log('Success read file, content: ', content);
  }).catch(err => {
    console.log('Error read file, error: ', err);
  })

/* End promise object */0

console.log('Halo Mas Heru');
