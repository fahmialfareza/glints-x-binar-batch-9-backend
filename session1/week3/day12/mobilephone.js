const phone = require('./class.js')
const apple = phone.apple
const samsung = phone.samsung

// phone.introduce() // error cause of static
console.log(phone.screen); // It will print "true"
// phone.fall() // error cause of static

const iphone = new apple("iPhone 12 Mini", 18000000, {ram: '4 GB', processor: 'Apple A14'})
// iphone.ad()
iphone.myspecs('Reza') // will call myspecs in Apple class not in Mobile Phone class
iphone.banting() // cause instance method
// console.log(iphone.screen); // It will be failed cause of static method

// console.log(iphone instanceof phone); // true, cause of instance of phone
