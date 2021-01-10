let fridge = [
  'Apple',
  'Orange',
  'Mango',
  'Egg'
]

function checkTheEggAvailability() {
  console.clear()
  return fridge.includes("Egg")
}

function goToMarket(isEggAvailable) {
  if (isEggAvailable == false) {
    console.log(`Egg is not available`);
    console.log(`Go to Market`);
    console.log(`Buy the egg`);
    console.log(`Back to home`);
  } else {
    console.log(`There is an egg`);
  }
}

function prepareTheFryer() {
  console.log(`Prepare the fryer`);
  console.log(`Put oil into the fryer`);
  console.log(`Lit up your stover`);
  console.log(`Wait until the oil getting hot`);
}

function cookTheEgg() {
  console.log(`Break the egg`);
  console.log(`Cook the egg`);
  console.log(`The egg is ready!`)
}

function cookAnEgg() {
  let check = checkTheEggAvailability()
  goToMarket(check)
  prepareTheFryer()
  cookTheEgg()
}

cookAnEgg()
