// function greeting() {
//     return console.log('Dragons Rule!!!')
// }
// console.log(greeting())
//NOTE - Write a functionthat adds any two numbers and retuns the result.
// function add(a,b) {
//     total = (a + b);
//     console.log(total)
// }
// console.log(add(2,3))
//Write a function that takes an array and checks if the sum of its elements is even or odd,
//the value should return "even" or "odd"
// function checkArraySum(arr) {
//     let sum = 0
//     for(i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     } 
//     console.log(sum)
//     if(sum%2 == 0 ) { 
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(checkArraySum([0, 1, 5, 546, 5487, 645, 65689]))

//SECTION - write a function that takes an array that returns only intigers
//["Ali", 3, "Isaac", 5, 9]
// function numFilter(arr) {
//     let integer = [] //declared integer to an empty array
//     for (let i = 0; i < arr.length; i++) {
//         if(Number.isInteger(arr[i])) {
//             integer.push(arr[i])
//         }
//     }
//     return integer
// }

// console.log(numFilter(["Ali", 3, "Isaac", 5, 9]))// arrays are 0 based count not 1 based








// //SECTION - write a function that takes an array with numbers and multiplies by 2 then returns new total
// // arrayByTwo([2,5,4])
// function arrayByTwo(arr) {
//     for (i = 0; i < arr.length; i++) {
//        arr[i] *= 2
// }
// return arr
// }
// console.log(arrayByTwo([2,5,4]))




// //One line
// const oneLineArray = (arr) => arr.map(el => el*2)

// console.log(oneLineArray([2,5,4]))

//Create a function which takes two strings (p1 and p2) as arguments and returns a string
//stating the winner (Rock, Paper, Scissors)

//NOTE - Game Condition
// if p1 wins return the string "The winner is P1"
// if p2 wins return the string "The winner is P2"
// if they are the same then return "It's a draw"

// function rps(p1, p2) {
//     if(p1 === p2) return `It's a draw`
//     else if(p1 === 'Rock' && p2 === 'Scissors') return 'The winner is P1';
//     else if(p1 === 'Paper' && p2 === 'Rock') return 'The winner is P1';
//     else if(p1 === 'Scissors' && p2 === 'Paper') return 'The winner is P1';

//     else return 'The winner is P2'
// }

// console.log(rps('Rock', 'Scissors'))

// //ANCHOR - ES6 Javascript
// function rpsTwo(p1, p2) {

//     let obj = {
//         Rock: 'Scissors',
//         Scissors: 'Paper',
//         Paper: 'Rock'
//     }
//     return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "The winner is P1" : "The winner is P2"
// }

// console.log(rpsTwo('Paper', 'Paper'))

//ANCHOR - JS built in function includes()
function rpsThree(p1, p2) {
    const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']
/* includes() searches the target for any matches with the assigned search and will give a return based on how the return 
is written and if it is searching an array or a string. in this case it searches the input of p1 and p2 and compares them to
the set win conditions*/ 
    return p1 === p2 ? "it's a draw" : `The winner is ${wins.includes(p1 + p2) ? 'P1' : 'P2'}`
}
console.log(rpsThree('Paper', 'Scissors'))