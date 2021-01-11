const data = {
  number: 1,
  name: 'Sahlan',
}

if (!data.images) {
  data.images = [{
      street: "Jalan Satu"
  }]
}

// data.images[data.images.length] = {
//   street: "Jalan Dua"
// };

console.log(data);
