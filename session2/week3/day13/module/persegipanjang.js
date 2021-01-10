// import BangunDatar
const bangundatar = require('./bangundatar.js');

// Make persegi panjang class
class PersegiPanjang extends bangundatar {
  constructor(panjang, lebar) {
    super('Persegi Panjang')

    this.panjang = panjang
    this.lebar = lebar
  }

  // override menghitungLuas bangundatar
  menghitungLuas() {
    return this.panjang * this.lebar
  }

  // override menghitungKeliling bangundatar
  menghitungKeliling() {
    return 2 * (this.panjang + this.lebar)
  }
}

module.exports = PersegiPanjang;
