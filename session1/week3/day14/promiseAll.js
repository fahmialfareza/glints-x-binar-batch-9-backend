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

/* async function */
async function mergedContent() {
  try {
    /* This is recommended */
    const result = await Promise.all([
      read('contents/content1.txt'),
      read('contents/content2.txt'),
      read('contents/content3.txt'),
      read('contents/content4.txt')
    ])
    /* end recommended */
    await writeFile('contents/firman.txt', result.join(''))
  } catch (e) {
    throw e
  }

  // The best practice is:
  // return promise, not return value of promise
  // not also return use await
  return read('contents/result.txt')
}

// console.log(mergedContent()) // Promise<Pending>

/* Start promise */
mergedContent()
  .then(ilham => {
    console.log(ilham) // content of result.txt
  }).catch(err => {
    console.log('Error to read/write file, error: ', err)
  }).finally(() => {
    console.log('Mantappp!!');
  })
/* end promise */
