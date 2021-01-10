// import fs
const fs = require('fs');

/* Start make promise object */
const readFile = (file, options) => new Promise((fulfill, reject) => {
  fs.readFile(file, options, (err, content) => {
    if (err) {
      reject(err)
    }

    return fulfill(content)
  })
})
/* End make promise object */

/* Start use promise */
readFile('contents/content.txt', 'utf-8')
  .then(content => {
    // success
    console.log('Success read file, content: ', content);
  })
  .catch(err => {
    // if error
    console.log('Error when trying to read file', err);
  })
/* end promise */

console.log('Hello');
