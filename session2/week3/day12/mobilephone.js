const phone = require('./class.js')
const apple = phone.apple
const samsung = phone.samsung

// props for iPhone with object
// var iphoneInput = [{
//   name: "iPhone 12",
//   brand: "Apple"
// }, {
//   name: "iPhone 11",
//   brand: "Apple"
// }]

let iphone12 = new apple('iPhone 12',  'Sahlan', {ram: '4 GB', proc: 'Apple A14'}) // make object iphone from phone
// console.log(iphone.name); // print name of iphone variable
// console.log(iphone.isScreenExist); // error cause
iphone12.ad() // call method from phone
iphone12.intro('Mbak Siti')
iphone12.banting()
// iphone12.fall() // error cause of static
// console.log(iphone12 instanceof phone); // true because iphone12 is child of phone


let samsungs20 = new samsung('Samsung S20', 'Kevin', {ram: '8 GB', proc: 'Qualcomm'})
samsungs20.ad()


// console.log(phone.isScreenExist) // call static property/variable from class.js
// phone.introduce() // error cause of instance method
// phone.hello() // call static method from class.js
// phone.fall()
