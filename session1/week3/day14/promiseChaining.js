// Import fs to read/write file
const fs = require('fs')

/* Start make promise */
const readFile = options => file => new Promise((resolve, reject) => {
  fs.readFile(file, options, (err, content) => {
    if (err) return reject(err)
    return resolve(content)
  })
})

const writeFile = (file, content) => new Promise((resolve, reject) => {
  fs.writeFile(file, content, err => {
    if (err) return reject(err)
    return resolve()
  })
})
/* End make promise */


/* Make options variable for fs */
const
  read = readFile('utf-8')

let result = ''
/* End make options variable for fs */


/* Start use promise */
read('contents/content1.txt')
  .then(content1 => {
    result += content1
    return read('contents/content2.txt') // process to read file content1.txt
  }).then(content2 => {
    result += content2
    return read('contents/content3.txt')
  }).then(content3 => {
    result += content3
    return read('contents/content4.txt')
  }).then(content4 => {
    result += content4
    return writeFile('contents/wawan.txt', result)
  }).then(() => {
    console.log('Writing done!');
    return read('contents/wawan.txt')
  }).then(result => {
    console.log(result);
  }).catch(err => {
    console.log('Error read/write file, error: ', err);
  })
/* End use promise */
