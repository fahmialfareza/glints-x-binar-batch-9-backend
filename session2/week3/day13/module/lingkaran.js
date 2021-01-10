// import parent class
const bangundatar = require('./bangundatar.js')

class Lingkaran extends bangundatar {
  constructor(radius) {
    super('Lingkaran')

    this.radius = radius
  }

  // Override menghitungLuas
  menghitungLuas() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  // Override menghitungKeliling
  menghitungKeliling() {
    return 2 * Math.PI * this.radius
  }
}

module.exports = Lingkaran;
