const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

var result1 = [];
var a = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    result1.push(words[i])
  }
}

console.log(result1);
