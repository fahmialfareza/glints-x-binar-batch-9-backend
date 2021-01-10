const login = require('./login.js')

var array = [
  {
    "name": "Khay",
    "status": "Positive"
  },
  {
    "name": "Pudji",
    "status": "Suspect"
  },
  {
    "name": "Heru",
    "status": "Negative"
  },
  {
    "name": "Kevin",
    "status": "Positive"
  },
  {
    "name": "Tamam",
    "status": "Suspect"
  },
  {
    "name": "Sahlan",
    "status": "Negative"
  },
]

function menu() {
  console.log(`Menu`);
  console.log(`1. Positive`);
  console.log(`2. Suspect`);
  console.log(`3. Negative`);
  console.log(`4. Exit`);
  login.rl.question(`Choose option: `, option => {
    switch (Number(option)) {
      case 1:
        var no = 1;
        console.log(`\nPostive\n==========`);
        for (var i = 0; i < array.length; i++) {
          if (array[i].status == 'Positive') {
            console.log(`${no}. ${array[i].name}`);
            no++;
          }
        }
        console.log();
        menu()
        break;
      case 2:
        var no = 1;
        console.log(`\nSuspect\n==========`);
        for (var i = 0; i < array.length; i++) {
          if (array[i].status == 'Suspect') {
            console.log(`${no}. ${array[i].name}`);
            no++;
          }
        }
        console.log();
        menu()
        break;
      case 3:
        var no = 1;
        console.log(`\nNegative\n==========`);
        for (var i = 0; i < array.length; i++) {
          if (array[i].status == 'Negative') {
            console.log(`${no}. ${array[i].name}`);
            no++;
          }
        }
        console.log();
        menu()
        break;
      case 4:
        login.rl.close()
        break;
      default:
        menu()
    }
  })
}

console.clear()
// menu()

module.exports.menu = menu
