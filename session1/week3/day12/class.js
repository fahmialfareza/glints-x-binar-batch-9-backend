class MobilePhone {

  static screen = true // Static variable

  // Constructor
  constructor(name, brand, price, specs) {
    // Make a abstract class
    if (this.constructor === MobilePhone) {
      throw new Error("This is Abstract Class, you can't instance it")
    }

    this.name = name
    this.brand = brand
    this.price = price
    this.specs = specs
  }

  // Static Method/Function
  static introduce() {
    console.log(`This is Phone`);
  }

  /* Intance Method */
  hello() {
    console.log(`I am ${this.name} from ${this.brand}`);
  }

  myspecs() {
    console.log(`This is my spec, ${this.specs.ram} RAM and ${this.specs.processor} Processor`);
  }

  myprice() {
    console.log(`My price is IDR ${this.price} `);
  }

  ad() {
    // this.introduce() // It will be error cause of static
    this.hello()
    this.myspecs()
    this.myprice()
  }
  /* End instance method */
}

// Add Instance method
MobilePhone.prototype.banting = function () {
  console.log('Pecah dong!');
};

// Addn Static method
MobilePhone.fall = function () {
  console.log('Rusak dong!');
}


// Apple class is child of MobilePhone class
class Apple extends MobilePhone {

  constructor(name, price, specs) {
    super(name, 'Apple', price, specs)
  }

  // Overriding method
  hello() {
    console.log(`Hello, Apple user! I am ${this.name} from ${this.brand} California`);
  }

  // Overloading
  myspecs(yourname) {
    console.log(`Hello, ${yourname}! This is my iPhone spec, ${this.specs.ram} RAM and ${this.specs.processor} Processor`);
  }
}

// Samsung class is child of MobilePhone class
class Samsung extends MobilePhone {
  constructor(name, price, specs) {
    super(name, 'Samsung', price, specs)
  }

  // Overriding method
  hello() {
    console.log(`Hello, Samsung user! I am ${this.name} from ${this.brand} California`);
  }
}

let mobilephone = new MobilePhone('Samsung S20', 'Samsung', 20000000, {ram: '8 GB', processor: 'Quallcomm'})
mobilephone.ad()

console.log(Apple.screen);

// Export Class
module.exports.apple = Apple
module.exports.samusng = Samsung
