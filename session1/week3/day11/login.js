const EventEmitter = require('events')
const readline = require('readline')

const my = new EventEmitter()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const covid = require('./covid.js')

const loginFailed = (email) => {
  console.log(`${email} tidak bisa masuk`);
  rl.close()
}

my.on('Login Failed', loginFailed)

my.on('Login Success', function() {
  covid.menu()
})

const user = {
  login(email, password) {
    const pass = '123456'

    if (password != pass) {
      my.emit('Login Failed', email)
    } else {
      console.log('Login Success\n');
      my.emit('Login Success')
    }
  }
}

rl.question('Email: ', email => {
  rl.question('Password: ', password => {
    user.login(email, password)
  })
})

module.exports.rl = rl
