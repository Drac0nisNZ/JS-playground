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
function numFilter(arr) {
    let integer = [] //declared integer to an empty array
    for (let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            integer.push(arr[i])
        }
    }
    return integer
}

console.log(numFilter(["Ali", 3, "Isaac", 5, 9]))// arrays are 0 based count not 1 based