let count=0;
function countChar(char) {
    for (let i = 0; i < char.length; i++) {
    if (char[i]==='a' || char[i]==='A'){
        count++;
    }
    }
    return count; 
}
const result=countChar("I AM Learning JavaScript, The Language of internet");
console.log(`The total number of 'a' in a string is :${result}`);
const result1=countChar('My favourite movie is LAggAn');
console.log(`The total number of 'a' in a second string is:${result1}`);
