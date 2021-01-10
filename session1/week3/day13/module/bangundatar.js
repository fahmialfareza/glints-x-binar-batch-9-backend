// Import Bangun class
const bangun = require('./bangun.js');

/* Make BangunDatar Abstract Class */
class BangunDatar extends bangun {

  // Make constructor with name variable/property
  constructor(name) {
    super(name)

    if (this.constructor === BangunDatar) {
      throw new Error('This is abstract!')
    }
  }

  // menghitungLuas instance method
  menghitungLuas() {
    console.log('Luas bangun datar');
  }

  // menghitungKeliling instance method
  menghitungKeliling() {
    console.log('Keliling bangun datar');
  }
}
/* End BangunDatar Abstract Class */

module.exports = BangunDatar
