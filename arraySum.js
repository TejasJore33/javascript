// Sum of Array: Write a function that takes an array of numbers and returns the sum of all elements.

let arr = [11,25,68,78,65];
let sum = 0;
function arraySum (arr){
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
       
    }
    return sum;
}

const result = arraySum(arr);
console.log(`Sum of all the elements in array is ${result}`);