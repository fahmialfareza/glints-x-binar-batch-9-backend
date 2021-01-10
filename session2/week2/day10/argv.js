function persegipanjang(p, l) {
  return p * l
}

let a = process.argv.slice(0)[2]
let b = process.argv.slice(0)[3]
console.log(a);
console.log(b);
console.log(persegipanjang(a, b));
