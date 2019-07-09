// const arr =[3,6,8,2,9,4];
// const newArr =[]

// const result = arr.filter((num) => {
//     if (num % 2 ===0){
//         newArr.push(num)
//     return num
    
//   }
// })
//   console.log(result)

// 
// const arr=["dog", "wolf", "by", "family", "eaten", "camping"]
// const newArray =[]

// const result1 = arr.filter(function(str) {
//     //  for (let i = 0; i < arr.length; i++)
//      return str.length <=5;

// }) 
//   console.log(result1) 

const possMember =[
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]
const trueMembers =[]  

    
  const illMembers = possMember.filter((function (object){
      

       return  object.member === true 


            
        
                   
  }))
  
console.log(illMembers)

const checkAge=[ {
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

const canGo =[]
const ofAge = checkAge.filter((function(person){
    
    return person.age <18

  }))
  
  console.log(ofAge)
      