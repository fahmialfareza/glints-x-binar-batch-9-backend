
const data = []
random = Math.floor(Math.random() * 100)
randomNumber = Math.floor(Math.random() * 10)

for (var i = 0; i < randomNumber; i++) {
  data.push([null, random][Math.floor(Math.random() * 2)])
}

console.log(data);
