let person = {
  name: "Fahmi Alfareza",
  address: "Magelang",
  isMarried: false,
  isLearned: false,
}

console.log(person.name);
// Fahmi Alfareza

console.log(person["name"]);
// Fahmi Alfareza

if (person.isMarried) {
  console.log(`${person.name} is taken`);
} else {
  console.log(`${person.name} is single`);
}
// Fahmi Alfareza is single

if (person.isLearned) {
  console.log(`Dia pernah belajar`);
} else {
  console.log(`Dia belum belajar`);
}
