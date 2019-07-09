// .map always returns a new array
//will always be same size as the beginning array
//allows to change the array

// const numbers =[3,5,9,98,87]

// const newNumbers = numbers.map(num => num *2)  
  
//   console.log(numbers) 
//   console.log(newNumbers)



//   const numArr =[34,43,787,395]
//   const newArr = numArr.map (num => numArr.toString())

// console.log(newArr
// const result =

// const arr=["john", "JACOB", "jinGleHeimer", "schmidt"]
// const allCaps = arr.map (function(str) {
//      return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase() 
              
// })

// console.log(allCaps)



const arr =[{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

// const newArr = arr.map(function(object) {
//     return object.name
// })
// console.log(newArr)

function isGoing(people) {
    
    people.map(function(people) {
    
        if (people.age >= 18){
           console.log(people.name + " can go to the Matrix.") 
        } else {
            console.log(people.name + " is under age.")
        }
} )

}

console.log(isGoing(arr))
