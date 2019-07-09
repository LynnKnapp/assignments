const readline = require('readline-sync');
console.log("Hello")

const person =readline.question("What is your name?")
console.log("Welcome " + person + "!" )

const sitcom =readline.question("What is your favorite sitcom? ")
console.log(person + " I love " + sitcom + " too.")