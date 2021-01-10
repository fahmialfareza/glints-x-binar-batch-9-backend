let person = {
  name: "Fahmi Alfareza",
  address: "Magelang",
  isMarried: true
}

console.log(person.name);
// Fahmi Alfareza

console.log(person["name"]);
// Fahmi Alfareza

if (!person.isMarried) {
  console.log(`${person.name} is single`);
} else {
  console.log(`${person.name} is taken`);
}
// Fahmi Alfareza is single
