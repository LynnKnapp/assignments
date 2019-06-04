
// for ( var i = 0; i <= 101; i++ ) {
//     if (i % 2) {
//         console.log (" number is even")
//     }   else  {
//         console.log ("number is odd")
//         } 
//     }        
    // var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
    
    // var computers = 0
    // for ( var i = 0; i <= officeItems.length; i++) {
    //         if(officeItems[i] === 'computer'){
    //              computers++
    //         }
    //     }
    //     console.log(computers);

var seeMadMax = [ {
  
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 
for (var i = 0; i < seeMadMax.length; i++){
   if (seeMadMax[i].age >= 18) {
       console.log (seeMadMax[i].name + " who is a " + seeMadMax[i].gender + " can see Mad Max")
   } else{
       console.log (seeMadMax[i].name + " who is a " + seeMadMax[i].gender + " can't see Mad Max")
   }
}

