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

/* Async function */
async function mergedContent() {
  try {
    /* This is not recommended */
    const content1 = await read('contents/content1.txt')
    const content2 = await read('contents/content2.txt')
    const content3 = await read('contents/content3.txt')
    const content4 = await read('contents/content5.txt')
    /* End this is not recommended */
    await writeFile('contents/heru.txt', content1 + content2 + content3 + content4)
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
mergedContent()
  .then(heru => {
    console.log('Success to read and write file, content: ', heru);
  }).catch(error => {
    console.log('Failed to read/write file, content', error);
  })
