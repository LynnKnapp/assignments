// Intro to programming
const readline = require('readline-sync');

// Greet the player
const name = readline.question("What is your name?");
console.log("Thank you" + name + "!")

// Set up global variables
let gameover =false
let options =("Put hand in hole", "Find the key", "Open the door")

// game Loop
while(!gameover){
    const userAnswer =readline.keyInSelect(options,"")
}



