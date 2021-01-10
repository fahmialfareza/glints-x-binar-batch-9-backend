// Import fs module
const fs = require('fs');

/* Start make promise object */
const readFile = options => file => new Promise((fulfill, reject) => {
  fs.readFile(file, options, (error, content) => {
    if (error) {
      return reject(error)
    }

    return fulfill(content)
  })
})

const writeFile = (file, content) => new Promise((resolve, reject) => {
  fs.writeFile(file, content, err => {
    if (err) return reject(err)
    return resolve()
  })
})
/* Promise object end */

/* Make options variable for fs */
const read = readFile('utf-8')
/* End make options variable for fs */

/* Promise race */
Promise.race([read('contents/content1.txt'), read('contents/content2.txt'), read('contents/content3.txt'), read('contents/content4.txt')])
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
/* Promise race end */
