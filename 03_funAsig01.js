function fun1(){
    console.log("Name: Jore Tejas");
}
fun1();
function fun2(){
    console.log("Address: At-Pathare(422104)");
}
fun2();

console.log("------------------------------------------");

function personalDetails(){
    console.log("firstName = Tejas");
    console.log("lastName = Jore");
    console.log("collegeName = GSM");
}
personalDetails();

console.log("------------------------------------------");

function swapvaluesDude(value1,value2){
    console.log("Before swap: ",value1, value2);
    var temp=value1;
    var value1=value2;
    var value2=temp;
    console.log("After swap:", value1,value2);

}
swapvaluesDude("Virat","Anushka");
console.log("------------------------------------------");
swapvaluesDude(1000,2000);
console.log("------------------------------------------");

function addThreeValues(val1,val2,val3){
    var add= val1+val2+val3;
    console.log("addition is:",add);            
}
addThreeValues(10.23,600,40);
console.log("------------------------------------------");
addThreeValues("Hello","Good","Morning");
