const persegi = require('./persegi')

console.log(persegi.hitungLuas(4));
persegi.bangunRuang = false;
console.log(persegi.bangunRuang);

persegiSatu = new persegi(5);
console.log(persegiSatu.hitungKeliling());
persegiSatu.bangunDatar = false;
console.log(persegiSatu.bangunDatar);

persegiDua = new persegi(6);
console.log(persegiDua.hitungKeliling())
console.log(persegiDua.bangunDatar);

console.log(persegi.bangunRuang);
