console.log("1.Find the greatest number amongst two number");
var greaterNumber=function(num1,num2){
    var result=(num1>num2)?`${num1} is greater `:`${num2} is greater`;
    console.log(`${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,900);
console.log("-----------------------------------------");
console.log("2.Even or odd");
var isEvenOrOddNum=function(val){
    var result=(val%2==0)?`${val} is even`:`${val} is odd`;
    console.log(`${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("-------------------------------------------------");
var wordLength=function(word){
    var wLength=word.length;
    var result=(wLength%2==0)?`${word} has even word length`:`${word} has odd word length`;
    console.log(`${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
