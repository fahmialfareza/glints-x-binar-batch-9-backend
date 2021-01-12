class Persegi {

  static bangunRuang = true;

  constructor(sisi) {
    this.bangunDatar = true;
    this.sisi = sisi;
  }

  static hitungLuas(sisi) {
    return Math.pow(sisi, 2);
  }

  hitungKeliling(sisi) {
    return 4 * sisi;
  }

}

module.exports = Persegi;
