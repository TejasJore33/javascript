// Remove Duplicates: Write a function that takes an array and returns a new array with all duplicate values removed.

const arr = [10,20,301,10,20,50,60,80];

function removeDuplicate(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if(arr[i] === result[j]){
               isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}
   

const final = removeDuplicate(arr);
console.log(final);
