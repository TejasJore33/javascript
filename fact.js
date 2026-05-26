// Factorial of a Number: Write a function to calculate the factorial of a given number ($n!$) using recursion or a loop.

const factorial = function(n) {
    if(!Number.isInteger(n) || Number <0 ){
        console.log("the factorial is only for non negative number ");
    }
        let result = 1;
    for(let i = 2; i<=n; i++){
        result *= i;
    }
    return result
}

console.log(factorial(10));
console.log(factorial(5));