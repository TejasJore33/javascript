// FizzBuzz: Write a program that prints numbers from 1 to 50. For multiples of 3, print "Fizz"; 
// for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz"

function fizzBuzz() {
    // Start at 1 instead of 0
    for (let i = 1; i <= 50; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            // Only print the number if none of the above conditions are met
            console.log(i);
        }
        
    }
}

fizzBuzz();