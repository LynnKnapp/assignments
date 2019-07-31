var totalBox = document.getElementById("total")
var mario = document.baddies
<<<<<<< HEAD

document.baddies.spinyCoins.addEventListener('change', function(event){
        event.preventDefault()
        let audio = new Audio('./Mario-coin-sound.mp3');
        audio.play();
})

document.baddies.goombaCoins.addEventListener('change', function(event){
    event.preventDefault()
    let audio = new Audio('./Mario-coin-sound.mp3');
    audio.play();
})

document.baddies.bowserCoins.addEventListener('change', function(event){
    event.preventDefault()
    let audio = new Audio('./Mario-coin-sound.mp3');
    audio.play();
})

// document.getElementById('submit').addEventListener('click', function(event){
//     event.preventDefault()
//     let audio = new Audio('./Mario-coin-sound.mp3');
//     audio.play();
// })


mario.addEventListener("submit", function(event){
    event.preventDefault() 
    let audio = new Audio('./Mario-coin-sound.mp3');
    audio.play();
=======
mario.addEventListener("submit", function(event){
    event.preventDefault() 
>>>>>>> fb52a464918bbfbd04f0c2b32e3333c7c881b69c
    var goomba =Number(document.baddies.goombaCoins.value) * 5
    console.log (goomba)

    var bowser =Number(document.baddies.bowserCoins.value) * 7
    console.log (bowser)

    var spiny =Number(document.baddies.spinyCoins.value) * 11
    console.log (spiny)

    var num1 =(goomba)
    var num2 =(bowser)
    var num3 =(spiny)

    let addedTotal = num1 + num2 + num3

<<<<<<< HEAD
    var total = document.getElementById("pTotal")
=======
    var total = document.getElementById("p-total")
>>>>>>> fb52a464918bbfbd04f0c2b32e3333c7c881b69c
    total.innerText = addedTotal

    totalBox.appendChild(total)

})
