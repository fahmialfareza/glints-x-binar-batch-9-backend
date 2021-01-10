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
const
  read = readFile('utf-8'),
  files = ['contents/content1.txt', 'contents/content2.txt', 'contents/content3.txt', 'contents/content4.txt', 'contents/content5.txt']

// start promise allSettled
Promise.allSettled(files.map(i => read(i)))
  .then(results => {
    // const existsContent = results.filter(result => result.status === 'fulfilled')
    // isi dari existsContent: [{ status: 'fulfilled', value: 'isi content 1' }, ...]
    // dan seterusnya kecuali content 5
    console.log(results)
  })
