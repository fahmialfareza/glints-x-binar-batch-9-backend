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
let result = ''
/* End make options variable for fs */

/* Promise start */
read('contents/content1.txt')
  .then(content1 => {
    result += content1
    return read('contents/content2.txt')
  }).then(content2 => {
    result += content2
    return read('contents/content3.txt')
  }).then(content3 => {
    result += content3
    return read('contents/content4.txt')
  }).then(content4 => {
    result += content4
    return writeFile('contents/heru.txt', result)
  }).then(() => {
    console.log('Write success!');
    return read('contents/heru.txt')
  }).then(heru => {
    console.log('Success, content: ', heru);
  }).catch(error => {
    console.log('Error when read/write file, error', error);
  })

/* Promise end */
