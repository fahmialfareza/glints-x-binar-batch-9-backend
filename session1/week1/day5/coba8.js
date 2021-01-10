function calculateTubeVolume(r, t) {
  return 3.14 * (r**2) * t;
  // return volume;
}

// console.log(
//   calculateTubeVolume(5, 3)
// ) // 235.5

console.log(calculateTubeVolume(5, 3));
calculateTubeVolume(7, 2);

var a = calculateTubeVolume(5, 3);
var b = 700;
console.log(a + b);
