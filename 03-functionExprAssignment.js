console.log("1..Write a funtion Expression to get square of the number Ex->5,6,25,100");
var square=function (num){
    var result=num*num;
    return `Square is: ${result}`;
}
var result=square(5);
console.log("Square of 5 is :",result);

var result=square(6);
console.log("Square of 6 is :",result);

var result=square(25);
console.log("Square of 25 is :",result);

var result=square(100);
console.log("Square of 100 is :",result);

console.log("----------------------------------------------------------------------------");
console.log("2. Check and log type of function(Hint -> typeof variableName)");
var add="Tejas"
var def=typeof add;
console.log("Type of add is :",def);
console.log("----------------------------------------------------------------------------");
console.log("3.write a FE to get the area of rectangle plot[length=499 & width=917]");
var area=function (len,wid){
    var result=len*wid;
    return `Area is: ${result}`;
}
var result =area(499,917);
console.log("Area of rectangle is :",result);
console.log("----------------------------------------------------------------------------");
console.log("Write a FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself");
var swapValues=function(val1,val2){
    console.log("Before swap the given values are :",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("After swap the values are:",val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("----------------------------------------------------------------------------");
console.log("Write a FE which can perform the below steps for string 'JS the most popular language of internet' ");
var abc=function(){
    var sen="JS the most popular langulage of internet"
    var len=sen.length
    console.log("Total characters are:",len);
    var findindex=sen.charAt(6)
    console.log("Character at index 6 is:",findindex);
    var findindex=sen.charAt(12)
    console.log("Character at index 12 is:",findindex);
    var findLastchar=sen.charAt(41)
    console.log("Last char of the string is :",findLastchar);
    var squareOfLength=sen.length*sen.length;
    console.log("The total number of words in the string is",len,"& the square of num is :",squareOfLength);

}
abc();