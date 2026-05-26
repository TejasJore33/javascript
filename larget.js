// Find the Largest Number: Write a function that takes an array of numbers and returns the largest one.


let arr = [10,50,555,60,80,90];

let largest =0;
function largetNumber(arr){
        for (let i = 0; i < arr.length; i++) {
          if(arr[i]>largest)
            largest = arr[i]

        }
        return largest;
        console.log(largest);
}

console.log(largetNumber(arr));