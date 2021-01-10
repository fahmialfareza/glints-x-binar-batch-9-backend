var array = ["tomato", "broccoli", "kale", "cabbage", "apple"]
var b = new Array

for (var i = 0; i < array.length; i++) {
  if (array[i] !== "apple") {
    console.log(`${array[i]} is a healthy food, it's definitely worth to eat.`);
  }
}
