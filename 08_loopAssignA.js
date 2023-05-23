var dev="I am very good IT Developer"
var  vowels=['a','e','i','o','u','A','E','I','O','U']
var count=0;
for (let i = 0; i < dev.length; i++) {
    if(vowels.includes(dev[i])){
        count ++;
    }
}
console.log("Total vowels includes in a string dev are:",count);

// write a function to get the sum of cube of numbers from 1 to 5.

function cube(){
    var sum=0;
    for (let i = 0; i <=5; i++) {
        var cube=i*i*i;
         sum +=cube;
        
        
    }
    console.log("sum of the cube form 1 to 5 is:",sum);
}
cube();

//log only odd positioned chars on console and do not consider empty spaces

function oddPositionedChars(string){
    var result="";
    for (let i = 0; i< string.length; i++) {
        if(i%2!==0 && i!==" "){
            result +=string[i];
            
        }
       
    }
    console.log(result);
}
var string1="Hard work always pay back";
var string2="Soon I Will be Angular IT Champ";
oddPositionedChars(string1);
oddPositionedChars(string2);