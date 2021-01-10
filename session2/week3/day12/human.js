class Human {

  constructor(name) {
    this.name = name
    // this.gender = gender
  }

  bicara() {
    console.log('Aku lagi ngomong!');
  }

  berjalan() {
    console.log('berjalan');
  }

  lari() {
    console.log('Aku lagi berlari');
  }

}

let heru = new Human('Heru')
console.log(heru);

console.log(Human);
