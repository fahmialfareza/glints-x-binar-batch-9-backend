// Import module.js
const importModule = require('./module/module.js')

// make object of importModule
const hitung = new importModule()

/* Start make calculate persegi */
let luasPersegi = hitung.menghitungLuasPersegi(20);
console.log(luasPersegi);

let kelilingPersegi = hitung.menghitungKelilingPersegi(30)
console.log(kelilingPersegi);
/* End make calculate persegi */

/* Start make calculate persegi panjang */
let luasPersegiPanjang = hitung.menghitungLuasPersegiPanjang(10, 20)
console.log(luasPersegiPanjang);

let kelilingPersegiPanjang = hitung.menghitungKelilingPersegiPanjang(20, 30)
console.log(kelilingPersegiPanjang);
/* End make calculate persegi panjang */

/* start make calculate lingkaran */
let luasLingkaran = hitung.menghitungLuasLingkaran(7)
console.log(luasLingkaran);

let kelilingLingkaran = hitung.menghitungKelilingLingkaran(14)
console.log(kelilingLingkaran);
/* End make calculate lingkaran */

// let volumeBalok = hitung.menghitungVolumeBalok(10);
// console.log(volumeBalok);
