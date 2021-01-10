// import modul
const modul = require('./module/module.js');

// instansiasi modul
const hitung = new modul()

/* Use hitung */

// Menghitung Luas
console.log(hitung.menghitungLuasPersegi(11))
console.log(hitung.menghitungLuasPersegiPanjang(20, 20));
console.log(hitung.menghitungLuasLingkaran(14));

// Menghitung Keliling
console.log(hitung.menghitungKelilingPersegi(40));
console.log(hitung.menghitungKelilingPersegiPanjang(100, 50));
console.log(hitung.menghitungKelilingLingkaran(21));
// hitung.hello() // error because method is private

/* End use hitung */
