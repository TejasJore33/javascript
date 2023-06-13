const palindorme=function(input){
    const str=String(input);
    const revstring=str.split('').reverse();
    const revstring2=revstring.join('');
    if (str===revstring2) {
        console.log(`The given ${input} input is palindrome`);
    }else{
        console.log(`Given  ${input} input is not a palindrome `);
    }
}
palindorme('madam');
palindorme('141');
palindorme('sunday');
palindorme('mom');
palindorme('lsiten');
palindorme('dad');