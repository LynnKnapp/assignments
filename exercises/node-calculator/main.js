const readline =require ("readline-sync")

const num1 =Number(readline.question("Hello, please enter your first number."))

const num2 =Number(readline.question("Now enter your second number."))




function add(num1,num2){
    return num1 + num2
}
console.log(add(num1,num2))

function multiply(num1,num2){
    return num1 * num2
}
console.log(multiply(num1,num2))

function subtract(num1,num2) {
    return num1 - num2
}
console.log(subtract(num1,num2))

function divide(num1,num2){
    return num1 /num2

}
console.log(divide(num1,num2))