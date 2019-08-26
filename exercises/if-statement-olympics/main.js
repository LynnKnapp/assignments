var person = {
    name: "Bobby",
    age: 12
  }
//   if(person.name[0] === 'B'){
//       console.log("Can go to the movie")
//   }else{
//        console.log("Isn't old enough to go to the movie")
//   }



if (person.name[0] === 'B' && person.age >= 18){
    console.log("Can go to the movie")
}else{
    console.log('Your the wrong person and your too young' )
}

if(1 === 1) {
    console.log("strict")
}else if(1 == 1){
    console.log("loose")
}else{
    console.log("not equal")
} 
 
if(1 <= 2 && 2 === 4){
    console.log('yes')
}else{
    console.log('false')
}

const dog = "dog"

if ( typeof dog === "string" ){
    console.log("it's a string")
}else{
    console.log("not a string")
}

const isTrue = true

if (isTrue){
  console.log("it is true")
}else{
  console.log("it isn't a boolean")
}

const a = 7

 if (a !== undefined ){
   console.log("it is defined as " + a +".")
 }else{
    console.log("is undefined")
}

let s = 10

if(s > 12){
    console.log("S is greater than 12")
}else if (s < 12){
    console.log("s is less than 12")
}

var myNum = 10
var even = (myNum % 2 === 0) ? "number is even": "number is odd";
console.log(even)