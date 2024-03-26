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
function dayCheck(day) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    let date = new Date(day)
    return days[date.getDay()]
}
console.log(dayCheck("03/23/2024"))

const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
console.log(getDayNameTwo("03/23/2024"))