let person = {
  name: "Reza",
  pets: [
    {
      name: "Jenny",
      type: "Cat"
    },
    {
      name: "Jessy",
      type: "Cat"
    }
  ],
  language: [
    "Indonesian",
    "Javanese",
    "English"
  ]
}

console.log(`${person.name} has ${person.pets.length} ${person.pets[0].type}s, ${person.pets[0].name} and ${person.pets[1].name}.`);
console.log(person.name + " has " + person.pets.length + " " + person.pets[0].type + "s, " + person.pets[0].name + " and " + person.pets[1].name + ".");

for (let i = 0; i < person.pets.length; i++) {
 console.log(person.pets[i].name);
}
