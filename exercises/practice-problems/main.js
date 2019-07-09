 function reverseStr(str){
  //turn string to array
    let arr= str.split("").reverse().join();
   return arr

  //reverse array
// let reverse= arr.reverse()
//   //turn array back to string
//   return reverse
  
 }
 

console.log(reverseStr("Serenity now"))

function isNum(str){
    
    if (str === "") {
    return true
} else {
    return false
 } 
}

console.log(isNum("serenity"))

function even(num){
    if (num % 2 === 0){
        return even
    } else {
        return false
    }
}
console.log(even(9))

let values =[20,78,98,909,65]

function aveArr(arr){
    let sum = 0
    
    for (let i = 0; i < arr.length; i ++){

        sum += arr[i]
    }
    
    let average = sum /arr.length 
    return average          
}
console.log(aveArr(values))

let carsArr1 =[ford, chevy, toyota, jeep];
let carsArr2 =[mitsubishi, nissan, kia, honda];

function cars(carsArr1, carsArr2){
    
} 
console.log()