// Import fs module
const fs = require('fs');

/* Start make promise object */
const readFile = options => file => new Promise((fulfill, reject) => {
  fs.readFile(file, options, (error, content) => {
    if (error) return reject(error)

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

/* Async function */
async function mergedContent() {
  try {
    /* This recommended */
    const result = await Promise.allSettled([
      read('contents/content1.txt'),
      read('contents/content2.txt'),
      read('contents/content3.txt'),
      read('contents/content5.txt'),
    ])
    /* End this recommended */
    await writeFile('contents/heru.txt', JSON.stringify(result))
  } catch (error) {
    throw error
  }

  // The best practice is:
  // return promise, not return value of promise
  // not also return use await
  return read('contents/heru.txt')
}
/* Async function end */

// console.log(mergedContent()); // Promise (Pending)

// Start promise
mergedContent() // process read/write
  .then(result => {
    console.log('Success to read and write file, content: ', result); // If success read/write file
  }).catch(error => {
    console.log('Failed to read/write file, content: ', error); // If error read/write file
  }).finally(() => {
    console.log('Mantap!'); // run after success or error
  })
