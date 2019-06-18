const readline =require ("readline-sync")
console.log("Hello, welcome.")

const player = {
    health: 150,
    itemArr: []
}
const playerName =readline.question("Please enter your name.")
console.log("Nice to meet you " + playerName) 
const weapon = ["sword", "arrow","spell"] 

function Enemy(name,type,health,weapon, item){
    this.name =name;
    this.type =type;
    this.health =health;
    this.weapon =weapon; 
    this.item =item;
}

const ready = readline.question("Are you ready to play?  Answer yes or no.")

if (ready === "yes"){ 
    while (player.health > 0) {
        const walk = readline.keyInYN ("Walk")   
        // console.log(walk) 
        if (walk) {
            console.log("Your now walking.")
            const isEnemy =enemyAppears() 
            
            if (isEnemy){
                let fight =readline.question ("Do you want to fight or run?")
                console.log (fight + "test1")

                if (fight === "fight"){
                    const currentEnemy = randomEnemy()
                    const randomNum = Math.floor(Math.random() * 3)

                    if (randomNum === 0) {
                            console.log ("Draw your sword and prepare for battle with " + currentEnemy.name +".") 
                            console.log(player)
                            // console.log(Enemy) refer to bossman1
                            while(player.health > 0 && currentEnemy.health > 0 ){
                                // if (player === attackEnemy
                                attackEnemy(currentEnemy)
                                attackPerson(currentEnemy)
                                dropItem(currentEnemy)
                                console.log(currentEnemy)
                                console.log(player)
                            }
                    }else if (randomNum === 1) {
                        console.log ("Draw your bow and prepare for battle with " + currentEnemy.name + ".")
                        while(player.health > 0 && currentEnemy.health > 0 ){
                            attackEnemy(currentEnemy)
                            attackPerson(currentEnemy)
                            dropItem(currentEnemy)
                            console.log(currentEnemy)
                            console.log(player)
                        }     
                    }else if (randomNum === 2) {
                        console.log ("Use your fire  spell and prepare for battle with "  + currentEnemy.name + ".")
                        while(player.health > 0 && currentEnemy.health > 0 ){
                            attackEnemy(currentEnemy)
                            attackPerson(currentEnemy)
                            dropItem(currentEnemy)
                            console.log(currentEnemy)
                            console.log(player)
                        }
                    }
                }
                else if (run === true){
                    console.log("You barely escaped.") 
                }  
            }
        }
    }
}        
console.log("Your worm food now you dirtbag, I will rule forever!")

function randomEnemy(){
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy ("Gibdo","mummy", 50,"hands","iron glove")
    }else if(randomNum === 1){
        return new Enemy ("Iron Knuckle","knight", 75, "knife", "dagger")
    }else if (randomNum === 2){
        return new Enemy ("Volvagia","dragon", 100,"fire","magic power")    
    }     
}

function attackEnemy(boss){
    if (weapon[0] ){
        boss.health -= 10    
    } else if (weapon[1]) {
        boss.health -= 15
    } else if (weapon[2]){
        boss.health -= 25
    }
}

function attackPerson(boss){
    if (boss.weapon){
        player.health -=Math.floor(Math.random() * (20 - 10) + 10)
    } 
}

function enemyAppears(){
    const randomNum = Math.floor(Math.random() * 3)            
    if (randomNum === 0) {
        return true;
    }
}

function run(){
    const randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0) {
        const currentEnemy = generateEnemy()
        // console.log(currentEnemy)
        console.log("You ran into" + currentEnemy.name) 
        battle(currentEnemy)
    }
}


function personDie (){
    if (person.health <= 0) {  
       gameOver 
    }
}

function dropItem(object){
    if (object.health <= 0) {
        player.itemArr.push(object.item)
    }

}

    










// REDUCE PLAYERS HEALTH

// player.health = player.health- 10 
// console.log(player.health )


// }




