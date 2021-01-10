const isTodayRaining = true;

if (isTodayRaining) {
  console.log("Use umbrella");
} else {
  console.log("NVM, I'll keep bringing umbrella in case if it's raining")
}

let angka = 30;

// if (!isNaN(angka)) {
//     if (angka < 10 && angka > 1) {
//         console.log(`number ${angka} is less than 10`);
//     } else if (angka < 50 && angka > 10) {
//         console.log(`number ${angka} is less than 50`);
//     } else if (angka < 75 && angka > 70) {
//         console.log(`number ${angka} is less than 75`);
//     } else {
//         console.log(`number ${angka} is more than 75`);
//     }
// } else {
//     console.log(`It's not a number`);
// }

if (!isNaN(angka)) {
    if (angka < 10 || angka < 5) {
        console.log(`number ${angka} is less than 10 or 5`);
    } else if (angka < 50 || angka < 25) {
        console.log(`number ${angka} is less than 50 or 25`);
    } else {
        console.log(`number ${angka} is more than 75`);
    }
} else {
    console.log(`It's not a number`);
}
