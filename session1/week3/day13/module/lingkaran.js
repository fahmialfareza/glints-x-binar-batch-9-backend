// Import BangunDatar class
const bangundatar = require('./bangundatar.js')

/* Make Lingkaran class that is parent of BangunDatar class (This is inheritance) */
class Lingkaran extends bangundatar {

  // Make constructor with sisi of lingkaran
  constructor(radius) {
    super('Lingkaran') // call the BangunDatar constructor, so this class will have all variable of the parent classs
    this.radius = radius // instance variable
  }

  // Overriding menghitungLuas from BangunDatar class
  menghitungLuas() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  // Overriding menghitungKeliling from BangunDatar class
  menghitungKeliling() {
    return 2 * Math.PI * this.radius
  }
}
/* End Persegi class */

module.exports = Lingkaran
