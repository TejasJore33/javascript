// const palindorme=function(input){
//     const str=String(input);
//     const revstring=str.split('').reverse();
//     const revstring2=revstring.join('');
//     if (str===revstring2) {
//         console.log(`The given ${input} input is palindrome`);
//     }else{
//         console.log(`Given  ${input} input is not a palindrome `);
//     }
// }
// palindorme('madam');
// palindorme('141');
// palindorme('sunday');
// palindorme('mom');
// palindorme('lsiten');
// palindorme('dad');


const palindorme = function(input) {
    const str = String(input);
    const reverseString = str.split("").reverse();
    const rever2 = reverseString.join("");
    
    if(str ===rever2){
        console.log(`The given string ${input} is a palindrome`);
    }else{
        console.log(`The given string {input} is not a palindrome`);
        
    }
}

palindorme("madam");
palindorme('lsiten');