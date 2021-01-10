// Import BangunDatar class
const bangundatar = require('./bangundatar.js')

// This class is child of BangunDatar (Inheritance)
class PersegiPanjang extends bangundatar {

  // Make constructor with panjang and lebar of persegi
  constructor(panjang, lebar) {
    super('Persegi Panjang') // call the BangunDatar constructor, so this class will have all variable of the parent classs
    this.panjang = panjang // Instance variable
    this.lebar = lebar // instance variable
  }

  // Private method
  #hello() {
    console.log('ini persegi panjang');
  }

  // Overriding menghitungLuas from BangunDatar class
  menghitungLuas() {
    return this.panjang * this.lebar
  }

  // Overriding menghitungKeliling from BangunDatar class
  menghitungKeliling() {
    return 2 * (this.panjang + this.lebar)
  }
}

module.exports = PersegiPanjang
