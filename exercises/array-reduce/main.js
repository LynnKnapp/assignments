// const arr =[1,2,3]
// const  totalSum = arr.reduce((total,num) => total + num);

//     console.log(totalSum)


// function stringConcat(arr) {
//     return arr.reduce((total,num) => total.toString() + num.toString())
// }
 
//  console.log(stringConcat([1,2,3])); // "123"   
 
<<<<<<< HEAD
 function totalVotes(person) {
     return person.reduce(function(add,person) {
        let voter =person.voted === true
         return voter.voted === true

     })
    
=======
//  function totalVotes(person) {
//      return person.reduce((add,person) {
//         let voter =person.voted === true
//          return voter.voted === true

//      })

>>>>>>> fb52a464918bbfbd04f0c2b32e3333c7c881b69c
// function totalVotes(voters){
//     return voters.reduce(function(acc,curr){
//          if (curr.voted === true){
//              return acc + 1
//          } else{
//              return acc
//          }
 
//          },0 )
//      }    
//      function totalVotes(voters)
//         return voters.reduce(function(acc,curr){
//              if (curr.voted === true){
//                  return acc + 1
//              } else{
//                  return acc
//              }
     
//              },0 )
            
      
     
      
 
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
// function shoppingSpree(arr) {
//     return arr.reduce(function(accum, curr){
//        return accum + curr.price 

//     },0)
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
 
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]]

const newArr = []  
 function flatten(arr) {
   return  arrays.concat(arrays[0], arrays[1],arrays[2])
       
 }
 // OR
 function flatten(arr){
     return arr.reduce((acc,curr) => acc.concat(curr),[])
 }
 
 ;
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6]; 
 
 