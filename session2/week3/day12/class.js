class MobilePhone {

  // this is static property
  static isScreenExist = true

  // this is constructor
  constructor(name, brand, user) {
    if (this.constructor === MobilePhone) {
      throw new Error(`It's a abstract class`)
    }

    this.name = name // Instance property
    this.brand = brand // Instance property
    this.user = user // instance property
  }

  /* start instance method */
  introduce() {
    console.log(`Hello, ${this.user}!`);
  }

  intro() {
    console.log(`Hello, I'm ${this.name} from ${this.brand}`);
  }

  ad() {
    console.log(`Hello, All!`);
    this.introduce()
    this.intro()
  }
  /* end instance method */

  // static method
  static hello() {
    console.log(`Hello, Pengguna!`);
  }

}

// Add instance method
MobilePhone.prototype.banting = function() {
  console.log('Pecah dong!');
}

// Add static method
MobilePhone.fall = function() {
  console.log('Rusak dong!');
}

// Apple is child of MobilePhone
class Apple extends MobilePhone {

  constructor(name, user, specs) {
    super(name, 'Apple', user) // call MobilePhone constructor
    this.specs = specs
  }

  // Overriding method
  introduce() {
    console.log(`Hello, Apple User, your name is ${this.name}`);
  }

  // Overloading method
  intro(message) {
    console.log(`Hello, I'm ${this.name} from ${this.brand} and ${message}`);
  }

}

// Apple is child of MobilePhone
class Samsung extends MobilePhone {

  constructor(name, user, specs) {
    super(name, 'Samsung', user) // call MobilePhone constructor
    this.specs = specs
  }

  // Overriding method
  introduce() {
    console.log(`Hello, Samsung User, your name is ${this.name}`);
  }

}

module.exports = MobilePhone
module.exports.apple = Apple
module.exports.samsung = Samsung
