// Import BangunDatar class
const bangundatar = require('./bangundatar.js')

/* Make Persegi class that is parent of BangunDatar class (This is inheritance) */
class Persegi extends bangundatar {

  // Make constructor with sisi of persegi
  constructor(sisi) {
    super('Persegi') // call the BangunDatar constructor, so this class will have all variable of the parent classs
    this.sisi = sisi // instance variable
  }

  // Overriding menghitungLuas from BangunDatar class
  menghitungLuas() {
    return this.sisi ** 2
  }

  // Overriding menghitungKeliling from BangunDatar class
  menghitungKeliling() {
    return this.sisi * 4
  }
}
/* End Persegi class */

module.exports = Persegi
