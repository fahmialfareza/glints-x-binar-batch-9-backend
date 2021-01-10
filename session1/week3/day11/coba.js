// Mengimport module events
var events = require('events');

// Membuat objek eventEmitter
var eventEmitter = new events.EventEmitter();

// Tugas Karyawan
function tugasKaryawan(kodeKaryawan, namaTugas, batas, waktu) {
    var counter = 0;
    var interval = setInterval(function() {
        console.log(kodeKaryawan, "Melakukan tugas:",namaTugas, " ke:", counter++);
        if (counter == batas) {
            clearInterval(interval);
            console.log(kodeKaryawan, " Tugas selesai.");
        }
    }, waktu);
}

// event handler untuk event 'kantor'
function karyawan1() {
    var kode    = "K001",
        tugas   = "Ngetik Naskah",
        batas   = 10,
        waktu   = 2000;
    console.log(kode, "Mulai bekerja");
    tugasKaryawan(kode, tugas, batas, waktu);
}

// event-handler untuk event 'kantor'
function karyawan2() {
    var kode    = "K002",
        tugas   = "Nyedu Kopi",
        batas   = 5,
        waktu   = 1000;
    console.log(kode, "Mulai bekerja");
    tugasKaryawan(kode, tugas, batas, waktu);
}

// event handler untuk event 'start'
function startPekerjaan() {
    // Mengikat event 'kantor' dengan event-handler
    eventEmitter.on('kantor', karyawan1);
    eventEmitter.on('kantor', karyawan2);

    // Mengaktifkan event 'kantor'
    eventEmitter.emit('kantor');
}

// Mengikat event 'start'
// dengan event handler 'startPekerjaan'
eventEmitter.on('start', startPekerjaan);

// Mengaktifkan event 'namaEvent'
eventEmitter.emit('start');

console.log("Program Berakhir");
