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
  read = readFile('utf-8'),
  files = ['contents/content1.txt', 'contents/content9.txt', 'contents/content3.txt', 'contents/content4.txt']

// start promise allSettled
Promise.allSettled(files.map(file => read(`${file}`)))
  .then(results => {
    // const existsContent = results.filter(result => result.status === 'rejected')
    // isi dari existsContent: [{ status: 'fulfilled', value: 'isi content 1' }, ...]
    // dan seterusnya kecuali content 5
    console.log(results)
  })
