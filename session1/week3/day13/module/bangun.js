/* Class Bangun */
class Bangun {
  constructor(name) {
    if (this.constructor === Bangun) {
      throw new Error('This is abstract')
    }

    this.name = name
  }

  menghitungVolume() {
    console.log('Menghitung Volume');
  }

  menghitungLuas() {
    console.log('Menghitung Luas');
  }

  menghitungKeliling() {
    console.log('Menghitung Keliling');
  }
}
/* End Bangun */

module.exports = Bangun
