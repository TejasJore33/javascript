 let factorial=1;
 function factorialOfNum(num) {
    if (num=== null || num===undefined || num===0) {
        console.log(`Enter the valid number for getting the factorial`);
    }
    else{
    for (let index = num; index>=1;  index--) {
        
        factorial=factorial*index;
     }
    }
     console.log(`Factorial of ${num} is ${factorial}`);
 }
 factorialOfNum(5);
 factorialOfNum(3);
 factorialOfNum(null);
 factorialOfNum(8);
 factorialOfNum(undefined);
 factorialOfNum(9);
 factorialOfNum(0);