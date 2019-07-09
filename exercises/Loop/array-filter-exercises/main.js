const arr =[3,6,8,2,9,4]

function fiveAndGreaterOnly(arr) {
   for (let i =0; i <arr.length; i++){
       if(arr[i] < 5) {
           console.log( arr[i])
       }
   } 
}  
const newArr =[]
function evensOnly(arr) {
   for (let i =0; i<arr.length; i++ ) {
        if (arr[i] % 2 ===0){
            newArr.push(arr[i])
            console.log(newArr)
        }
          
     }
  }
  
  console.log(evensOnly(arr))

  const arr=["dog", "wolf", "by", "family", "eaten", "camping"]

  function fiveCharactersOrFewerOnly(arr) {
    for (let i = 0; i < arr.length; i++){

    }
  }

  console.log(fiveCharactersOrFewerOnly([])); 
  

  





  