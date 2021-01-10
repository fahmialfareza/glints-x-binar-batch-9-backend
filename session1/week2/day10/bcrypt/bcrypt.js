const bcrypt = require('bcrypt');

myPlaintextPassword = 'firman';
const hash = bcrypt.hashSync(myPlaintextPassword, 12);
console.log(hash);

async function validate() {
  let password = "firman"
  return bcrypt.compareSync(password, hash); // true
}

validate().then(result => console.log(result))
