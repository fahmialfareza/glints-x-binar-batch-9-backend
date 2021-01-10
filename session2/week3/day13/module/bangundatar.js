// Import Bangun  class
const bangun = require('./bangun.js');

// This is class BangunDatar
class BangunDatar extends bangun {
  constructor(name) {
    super(name)

    // It is abstract class
    if (this.constructor === BangunDatar) {
      throw new Error('This is abstract')
    }
  }

  // This is private method, so you can't access on another js
  #hello() {
    console.log('Hello Bangun Datar!');
  }

  // instance method
  menghitungLuas() {
    console.log(`Menghitung Luas`);
  }

  // instance method
  menghitungKeliling() {
    console.log(`Menghitung Keliling`);
  }
}

module.exports = BangunDatar;
