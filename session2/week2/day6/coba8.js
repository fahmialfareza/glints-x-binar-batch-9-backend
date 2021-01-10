let angka = 21;

if (typeof angka === "number") {
    if (angka < 10) {
        console.log(`angka ${angka} kurang dari 10`);
    } else if (angka < 20) {
        console.log(`angka ${angka} kurang dari 20`);
    } else {
        console.log(`angka ${angka} lebih dari sama dengan 20`);
    }
} else {
    console.log(`Itu bukan angka`);
}
