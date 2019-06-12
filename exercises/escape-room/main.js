const readline =require("readline-sync");

const name = readline.question("What is your name?");
console.log("Thank you" + name + "!")

let gameOver =false
let options =["Put hand in the hole", "Find the key", "Open the door"]
let found=false
let open=false

while(!gameOver){
    const userAnswer =readline.keyInSelect(options, "What would you like to do?")
     
    if(userAnswer ===0){ 
        console.log("You just died, your worm food now.")
        gameOver =true

    }else if(userAnswer === 1){
        console.log ("Congrats! You obtained the key, now put it in the hole.")
        found=true
    }else if(userAnswer === 2){
        if(found === true){
        console.log("Congrats!  Now move it or lose is dude.")   
        open=true
        gameOver =true
        }else{
            console.log("Make sure you grab the key, go back and look for it.")
        }
    }else if(userAnswer === -1){
        console.log("Yomamma say, one can't cancel an escape room")
    
    }
}
