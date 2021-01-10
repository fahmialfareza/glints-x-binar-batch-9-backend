const EventEmitter = require('events')
const my = new EventEmitter()
const covid = require('/home/fahmialfareza/classcode/session2/week2/day9/covid.js')

readline = require('readline')
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function loginFailed(email) {
  console.log(email + ' Gagal Masuk!');
  rl.close()
}

my.on('Login Failed', loginFailed)

function loginSuccess(email) {
  console.log(email + ' Login Berhasil!\n');
  covid.menu()
}

my.on('Login Succes', loginSuccess)

function login(email, password) {
  const pass = 123456

  if (password != pass) {
    my.emit('Login Failed', email)
  } else {
    my.emit('Login Succes', email)
  }
}

rl.question('Email: ', email => {
  rl.question('Password: ', password => {
    login(email, password)
  })
})

module.exports.rl = rl
