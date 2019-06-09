var totalBox = document.getElementById("total")
var mario = document.baddies
mario.addEventListener("submit", function(event){
    event.preventDefault() 
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

    var total = document.getElementById("p-total")
    total.innerText = addedTotal

    totalBox.appendChild(total)

})
