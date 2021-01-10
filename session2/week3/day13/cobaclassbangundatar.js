// import bangun datar
const persegi = require('./persegi.js');
const persegipanjang = require('./persegipanjang.js');

// Use persegi
const persegi1 = new persegi(10)
console.log(persegi1.menghitungLuas())
console.log(persegi1.menghitungKeliling())

const persegi2 = new persegi(20)
console.log(persegi2.menghitungLuas());
console.log(persegi2.menghitungKeliling());


// Use persegipanjang
const persegipanjang1 = new persegipanjang(20, 30)
console.log(persegipanjang1.menghitungLuas())
console.log(persegipanjang1.menghitungKeliling())
