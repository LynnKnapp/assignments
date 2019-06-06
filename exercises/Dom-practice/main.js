var h1 = document.createElement ("h1")

h1.textContent = "Hello World"
h1.style.color = "pink"
h1.style.backgroundColor = "3338"
h1.style.fontFamily = "sans-serif"

var firstDiv = document.getElementById(my-div) 
firstDiv.appendChild(h1)

var myImg = document.createElement ("img")
myImg.src = "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
myImg.style.width = "400px"

firstDiv.appendChild(myImg)