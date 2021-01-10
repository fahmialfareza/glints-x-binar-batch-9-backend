# Code Challenge Week 01

Hello guys, looks like you've learned a little bit about Javascript. Now, I give you a challenge to sharpen your knowledge about what we have learn in this week!

Let's get started!

## Requirements

You must create `greet()` function declaration. That function will return a string and log it to the terminal, and it should be like this:

```bash
Hello, Fikri! Looks like you're 20 years old, and you lived in Surakarta!
```

Once you've done with it, submit your task in your repository `GlintsXBinar`, and it should follow this folder structure:

```bash
/'01. Basic Class'/'Code Challenge 01'/greet.js
/'01. Basic Class'/'Code Challenge 01'/geometry.js
```

## Source Code

```javascript
// Importing Module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Code here!

/*
 * This function is being used to greet people
 * The result of that function should be:
 * "Hello, <name>, looks like you're <age>! And you lived in <city>!"
 *
 * HINT:
 * To get the current year, let say 2020;
 * You can use this code
 *
 * const currentDate = new Date();
 * const currentYear = currentDate.getFullYear();
 * */
function greet(name, address, birthday) {
  // Insert your code here!

}


// DON'T CHANGE
console.log("Goverment Registry\n")
// GET User's Name
rl.question("What is your name? ",  name => { 
  // GET User's Address
  rl.question("Which city do you live? ", address => {
    // GET User's Birthday
    rl.question("When was your birthday year? ", birthday => {
      greet(name, address, birthday)

      rl.close()
    })
  })
})

rl.on("close", () => {
  process.exit()
})
```

