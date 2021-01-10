const persegi = require('./module/persegi.js');
const persegipanjang = require('./module/persegipanjang.js');
const lingkaran = require('./module/lingkaran.js');

/* Start Persegi */
let persegi1 = new persegi(10)
luasPersegi1 = persegi1.menghitungLuas()
kelilingPersegi1 = persegi1.menghitungKeliling()

console.log(luasPersegi1);
console.log(kelilingPersegi1);
/* End Persegi */

/* Start Persegi Panjang */
let persegipanjang1 = new persegipanjang(10, 20)
luasPersegiPanjang1 = persegipanjang1.menghitungLuas()
kelilingPersegiPanjang1 = persegipanjang1.menghitungKeliling()
// persegipanjang1.hello() // It will be error cause of private

console.log(luasPersegiPanjang1);
console.log(kelilingPersegiPanjang1);
/* End Persegi Panjang */

/* Start Lingkaran */
let lingkaran1 = new lingkaran(7)
luasLingkaran1 = lingkaran1.menghitungLuas()
kelilingLingkaran1 = lingkaran1.menghitungKeliling()

console.log(luasLingkaran1);
console.log(kelilingLingkaran1);
/* End Persegi */
