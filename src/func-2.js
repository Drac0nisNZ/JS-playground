// Crate a function that takes an array and return the types of the elements (data types) in a new array
// ex: arrTypes([1, 3, "Ali", []]) -> ["number", "number", "string", "object"]

function arrTypes(arr) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}
console.log(arrTypes([1, 3, "Ali", []]))
//ES6
const arrTypesNew = arr => arr.map(x => typeof x)
// .map uses an array to create a new array and keeps track of the location of data 
// within the array in relation to the position in the original array
console.log(arrTypesNew([1, 3, "Ali", []]))

// Create a function that takes 2-D arrays and returns the sum on min values in each row
/*
Ex: sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
])
output -> 1+6+11 = 18
*/