let fridge = [
  "Apple",
  "Wortel",
  "Milk",
  "Orange",
  "Leech",
  "Cabbage"
]

const result = fridge.filter(word => word.length > 4);
console.log(result);

for (var i = 0; i < fridge.length; i++) {
  if (fridge[i].length > 4) {
    console.log(fridge[i]);
  }
}
