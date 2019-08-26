

let string = "no soup for you"

function duplicates(string){
   
   let newString = string.split("")
   for (let i = 0; i < newString.length; i++ ){
      let string2 = newString.toString()
      let string3 =string2.indexOf(s,0)

     return string3  
   }
}
// console.log(duplicates(string))


function noDuplicates (str){
    let newStr = ''
    for (i = 0; i < str.length; i++){
        if(newStr.indexOf(str[i]) === -1){
            newStr += str[i]
        }
    }
    return newStr

}
console.log(noDuplicates('good mooring'))


