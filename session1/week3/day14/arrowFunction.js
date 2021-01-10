/* Normal Function */
function totalBayarNormal(diskon, hargaasli) {
  return hargaasli - (diskon / 100 * hargaasli)
}

let harga1 = totalBayarNormal(10, 100000)
let harga2 = totalBayarNormal(10, 200000)
let harga3 = totalBayarNormal(10, 300000)

console.log(harga1);
console.log(harga2);
console.log(harga3);

/* Arrow Function */
let totalBayarArrow = (diskon, hargaasli) => {
  return hargaasli - (diskon / 100 * hargaasli)
}

let diskonArrow = 10

let harga4 = totalBayarArrow(diskonArrow, 400000)
let harga5 = totalBayarArrow(diskonArrow, 500000)
let harga6 = totalBayarArrow(diskonArrow, 600000)

console.log(harga4);
console.log(harga5);
console.log(harga6);

/* Currying */
let totalBayarCurrying = hargaasli => diskon => {
  return hargaasli - (diskon / 100 * hargaasli)
}

// console.log(totalBayarCurrying(400000)(10));

let diskonCurrying = totalBayarCurrying(400000)

let harga7 = diskonCurrying(10)
// harga7 = totalBayarCurrying(10)(700000)
let harga8 = diskonCurrying(15)
let harga9 = diskonCurrying(20)

console.log(harga7);
console.log(harga8);
console.log(harga9);
