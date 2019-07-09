const mybtn = document.getElementById("btn").addEventListener("click", counter);
const result = document.createElement("h1")
let clicks = localStorage.getItem("huskies")

function counter(){
clicks++
result.textContent = clicks
document.body.appendChild(result)
localStorage.setItem("huskies", clicks)
}

//Nate
const display = document.getElementById("display")
const btn = document.getElementById

let count =0
if(localStorage.getItem("count" !== null){
    count = localStorage.getItem
}
// time functions:
// setTimeout(function(),1000)
// setInterval(function(),1000)

// function clickListener(e){
//     const clickedElement =(window.event) 
//     tags =document.getElementsByTagName(clickedElement.tagname);

//     for (var i =0; i <tags.length; i++) {
//         if (tags[i] ==clickedElement){
            
//         }
//     }
// }

