function calculateTubeVolume(r, t) {
  var circleArea = 3.14 * (r**2);
  return circleArea * t;
}

function luasAlas(r) {
  return 3.14 * (r ** 2);
}

function itungVolumeTabung(r, t) {
  return luasAlas(r) * t;
}

// luasAlas(10);

console.log(
  luasAlas(7)
) // 235.5

// console.log(
//   itungVolumeTabung(5, 3)
// ) // 235.5

// calculateTubeVolume(5, 3);
// //
// var a = 200;
// var b = calculateTubeVolume(10, 5);
// console.log(a + b);
