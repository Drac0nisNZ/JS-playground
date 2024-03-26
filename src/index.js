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

function calcNum2(num1, operator, num2) {
    switch (operator) {
        case '+': return num1+num2;
        break;
        case '-': return num1-num2;
        break;
        case '*': return num1*num2;
        break;
        case '/':
            if(num2 === 0) return "Can not devide by zero!"
            return num1+num2;
            default: return false
        break;
    }
}
console.log(calcNum2(2, "+", 3))