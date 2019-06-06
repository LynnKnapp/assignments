var myBox = document.getElementById("box")
myBox.style.width = "200px"
myBox.style.height = "600px"
myBox.style.backgroundColor = "purple"
myBox.style.margin = "5px"

myBox.addEventListener("mouseover", function(){
    myBox.style.backgroundColor = "blue"  
})

myBox.addEventListener("mousedown", function(){
    myBox.style.backgroundColor = "red"
})
myBox.addEventListener("mouseleave", function(){
    myBox.style.backgroundColor = "yellow"
})
myBox.addEventListener("dblclick", function(){
    myBox.style.backgroundColor = "green"

}) 

window.addEventListener("scroll", function(){
    myBox.style.backgroundColor = "orange"
})
