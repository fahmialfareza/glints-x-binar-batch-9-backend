// This is Bangun Class
class Bangun {
  constructor(name) {
    this.name = name

    // It is abstract class
    if (this.constructor === BangunDatar) {
      throw new Error('This is abstract')
    }
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

module.exports = Bangun;
