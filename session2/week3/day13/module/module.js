// Import bangun datar all class
const persegi = require('./persegi.js');
const persegipanjang = require('./persegipanjang.js');
const lingkaran = require('./lingkaran.js')

/* Start make module */
class Module {
  constructor() {
    this.name = 'Ini modul'
  }

  menghitungLuasPersegi(sisi) {
    let persegiHitung = new persegi(sisi) // make object of persegi
    return persegiHitung.menghitungLuas() // calculate area of persegi
  }

  menghitungKelilingPersegi(sisi) {
    let persegiHitung = new persegi(sisi) // make object of persegi
    return persegiHitung.menghitungKeliling() // calculate perimeter of persegi
  }

  menghitungLuasPersegiPanjang(panjang, lebar) {
    let persegiPanjangHitung = new persegipanjang(panjang, lebar) // make object of persegi panjang
    return persegiPanjangHitung.menghitungLuas() // calculate area of persegi panjang
  }

  menghitungKelilingPersegiPanjang(panjang, lebar) {
    let persegiPanjangHitung = new persegipanjang(panjang, lebar) // make object of persegi panjang
    return persegiPanjangHitung.menghitungKeliling() // calculate perimeter of persegi panjang
  }

  menghitungLuasLingkaran(radius) {
    let lingkaranHitung = new lingkaran(radius) // make object of lingkaran
    return lingkaranHitung.menghitungLuas() // calculate area of lingkaran
  }

  menghitungKelilingLingkaran(radius) {
    let lingkaranHitung = new lingkaran(radius) // make object of lingkaran
    return lingkaranHitung.menghitungKeliling()
  }


}
/* end make module */

module.exports = Module;
