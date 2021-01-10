let fridge = [
  'Apple',
  'Mango',
  'Orange'
]

function checkTheEggAvailability() {
  console.clear()
  console.log(`Check Egg Availability......`);

  for (var i = 0; i < fridge.length; i++) {
    if (fridge[i] == "Egg") {
      console.log("There is an egg");
      return true
    }
  }

  console.log("There is no egg");
  return false
}

function goToTheMarket(shouldWe) {
  if (shouldWe == false) {
    console.log(`Go to the market`);
    console.log(`Buy the egg`);
    console.log(`Back to home`);
  }
}

function prepareTheFryer() {
  console.log(`Pour the oil`);
  console.log(`Lit up the stove`);
  console.log(`Wait until oil getting hot`);
}

function cookTheEgg() {
  console.log(`Break the egg`);
  console.log(`Cook the egg`);
  console.log(`Egg can be eaten`);
}

function cookAnEgg() {
  let check = checkTheEggAvailability()
  // console.log(checkTheEggAvailability());
  goToTheMarket(check)
  prepareTheFryer()
  cookTheEgg()
}

cookAnEgg()
