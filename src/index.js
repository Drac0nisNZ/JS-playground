// Create a function that takes two numbers and a math operator(+, -, /, *)
//and will perform the calculation with the given numbers
//Cal(2, "+", 3) the output is 5
// function calc(num1, operator, num2) {
//     if(operator == '+') return num1+num2
//     if(operator == '-') return num1-num2
//     if(operator == '*') return num1*num2
//     if(operator == '/' && num2 != 0) return num1/num2
//     else return "Can not devide by zero!"
// }
// console.log(calc(0, "/", 3))

// const calcNum = (num1, operator, num2) => operator+num2 === "/0" ? "Can not devide by zero!" : eval(num1+operator+num2)
// console.log(calcNum(2, "+", 3))

// function calcNum2(num1, operator, num2) {
//     switch (operator) {
//         case '+': return num1+num2;
//         break;
//         case '-': return num1-num2;
//         break;
//         case '*': return num1*num2;
//         break;
//         case '/':
//             if(num2 === 0) return "Can not devide by zero!"
//             return num1+num2;
//             default: return false
//         break;
//     }
// }
// console.log(calcNum2(2, "+", 3))

// Rewrite in ES6 
// const calNum3 = (num1, operator, num2) => operator+num2 === "/0" ? "Can not devide by zero!" : eval(num1+operator+num2)
// console.log(calNum3(2, "+", 3))


// create an array to rotate the values clockwise by 1
// the last value becomes first
// rotateArray([20, 15, 26, 22, 30]) -> [30, 20, 15, 26, 22]
// function rotateArray(arr) {
//     let x = arr.pop()
//     arr.unshift(x)
//     return arr
// }
// console.log(rotateArray([20, 15, 26, 22, 30]))
// const rotateArray2 = arr => (arr.unshift(arr.pop()), arr)


// Crate a function that takes a given date (3/23/2024) return the day of the week
// as a string assuming the week starts on Sunday.
// function dayCheck(day) {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
//     let date = new Date(day)
//     return days[date.getDay()]
// }
// console.log(dayCheck("03/23/2024"))

//ES6
// const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
// console.log(getDayNameTwo("03/23/2024"))

// Create a function that can take a flat array and change it to nested arrays to represent
// an incremental depth level

// Ex nestArray([1,2,6,3]) -> [1, [2, [6, [3]]]]
// function nestArray(arr) {
//     if(arr.length == 1) return arr
//     let temp = []
//     for(let i = 0; i < arr.length; i++)
//     return [arr[0], nestArray(temp.slice(1))]
// }
// console.log(nestArray([1,2,6,3]))

// const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))]
// console.log(nestArray2([1, 2, 3]))







// create a function that takes two dates and returns the number of days between the first and second date.

/* getNumbers(
    newDate("March 26 2024"),
    newDate("March 30 2024")
) */
// output -> 4
//ES6 (provide inline comments for the code)
// const getDays = (date1, date2) => {
//     return new Date(date2 - date1).getDate() -1
// }
// console.log(getDays(
//     new Date("March 26 2024"),
//     new Date("March 30 2024")
//     ))

//create a function that takes an array of stringified numbers as a parameter and returns them as numbers
//Ex : ["1", "3", "6.7"] -> [1, 3, 6.7]  

// let arrayToNumbers = arr => arr.map(e => +e)

// console.log(arrayToNumbers(["1", "3", "6.7"]))

// function arrayToNumbers2(arr) {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         temp[i] = JSON.parse(arr[i])
//     }
//     return temp
// }

// console.log(arrayToNumbers2(["1", "3", "6.7"]))

// Create a function that returns (true) if all parameters are truthy and false otherwise.
// Ex. checkParam(true, true, true) -> true
// checkParam(5, 1, 3, 0) -> false
// Falsy values are: false, 0, and ""

// function checkParam(param) {
//         if(param.every) {
//         return true
//     } else {
//         return false
//     }
//     }
// console.log(checkParam(5, 1, 5, 6, 1))
// function checkParam2(arr){
//     let value = false
//             if(arr[i] !== 0 && arr[i] !== false && arr[i] !=="") {
//             value = true
//         }
//     }
//     return value
// }

// console.log(checkParam2(5, 1, 3, 1))

// const checkParam3 = (...args) => args.every(Boolean)
// console.log(checkParam3(5, 1, 3, 1))

// Create a function to check if an array contains a particular number
// Ex: checkArray([5,5,6], 5) -> true
// Ex: checkArray([1,3,5,7,10], 2) -> false

function checkArray(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
        return true
} 
}
return false
}
console.log(checkArray([5,5,6], 7))

// //ES6
// const checkArray2 = (arr, el) => {
//     return arr.includes(el)
// }
// console.log(checkArray2([5,5,6], 5))

// function checkArray3(arr, num) {
//     retu
// }