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

/* End make options variable for fs */

/* Start async function */
async function mergedContent() {
  try {
    /* This is not recommended */
    const content1 = await read('contents/content1.txt')
    const content2 = await read('contents/content2.txt')
    const content3 = await read('contents/content3.txt')
    const content4 = await read('contents/content4.txt')
    /* end not recommended */
    await writeFile('contents/wawan.txt', content1 + content2 + content3 + content4)
  } catch (e) {
    throw e
  }

  // The best practice is:
  // return promise, not return value of promise
  // not also return use await
  return read('contents/wawan.txt')
}
/* end async function */

// console.log(mergedContent()) // Promise<Pending>

/* start promise */
mergedContent()
  .then(result => {
    console.log(result);
  }).catch(err => {
    console.log('Error read/write file, error: ', err);
  })
/* end promise */
