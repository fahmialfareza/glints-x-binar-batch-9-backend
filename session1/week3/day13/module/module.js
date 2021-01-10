// Import class
const persegi = require('./persegi.js')
const persegipanjang = require('./persegipanjang.js')
const lingkaran = require('./lingkaran.js')
// const balok = require('balok');

/* Start class Module */
class Module {
  constructor() {
    this.name = 'Menghitung Bangun Datar'
  }

  /* Ini bangun datar */
  // function luas Persegi
  menghitungLuasPersegi(sisi) {
    let hitungLuasPersegi = new persegi(sisi)
    return hitungLuasPersegi.menghitungLuas()
  }

  // function keliling Persegi
  menghitungKelilingPersegi(sisi) {
    let hitungKelilingPersegi = new persegi(sisi)
    return hitungKelilingPersegi.menghitungKeliling()
  }

  // function luas Persegi Panjang
  menghitungLuasPersegiPanjang(panjang, lebar) {
    let hitungLuasPersegiPanjang = new persegipanjang(panjang, lebar)
    return hitungLuasPersegiPanjang.menghitungLuas()
  }

  // function keliling Persegi Panjang
  menghitungKelilingPersegiPanjang(panjang, lebar) {
    let hitungKelilingPerseguPanjang = new persegipanjang(panjang, lebar)
    return hitungKelilingPerseguPanjang.menghitungKeliling()
  }

  // function luas Lingkaran
  menghitungLuasLingkaran(radius) {
    let hitungLuasLingkaran = new lingkaran(radius)
    return hitungLuasLingkaran.menghitungLuas()
  }

  // function keliling Lingkaran
  menghitungKelilingLingkaran(radius) {
    let hitungKelilingLingkaran = new lingkaran(radius)
    return hitungKelilingLingkaran.menghitungKeliling()
  }

  /* Ini end bangun datar */

  /* Start bangun ruang */

  menghitungVolumeBalok(sisi)  {

  }

  /* End bangun ruang */

}
/* End class Module */

module.exports = Module
