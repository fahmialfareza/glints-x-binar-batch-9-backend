// Import bangun datar
const bangundatar = require('./bangundatar.js');

// Make Persegi class inherit from BangunDatar
class Persegi extends bangundatar {
  constructor(sisi) {
    super('Persegi')

    this.sisi = sisi
  }

  // override menghitungLuas BangunDatar class
  menghitungLuas() {
    // super.menghitungLuas()
    return Math.pow(this.sisi, 2)
  }

  // override menghitungKeliling BangunDatar class
  menghitungKeliling() {
    return 4 * this.sisi
  }
}

module.exports = Persegi;
