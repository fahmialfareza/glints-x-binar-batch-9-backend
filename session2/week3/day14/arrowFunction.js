/* Normal Function */
function hargaTotalNormal(diskon, harga) {
  return harga - ((diskon / 100) * harga)
}

let harga1 = hargaTotalNormal(10, 100000)
let harga2 = hargaTotalNormal(10, 200000)

console.log(harga1);
console.log(harga2);

/* Arrow Function */
const hargaTotalArrow = (diskon, harga) => {
  return harga - ((diskon / 100) * harga)
}

let diskon = 10

let harga3 = hargaTotalArrow(diskon, 300000)
let harga4 = hargaTotalArrow(diskon, 400000)

console.log(harga3);
console.log(harga4);

/* Currying */
const hargaTotalCurrying = harga => diskon => customer => {
  console.log(customer);
  return harga - ((diskon / 100) * harga)
}

let harga5 = hargaTotalCurrying(25)(500000)
console.log(harga5);

let hargasepatu = hargaTotalCurrying(700000)

let harga6 = hargasepatu(10)('Khay')
let harga7 = hargasepatu(20)('Sahlan')
let harga8 = hargasepatu(30)('Eka')

console.log(harga6);
console.log(harga7);
console.log(harga8);
