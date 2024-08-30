let array = [10,20,30,40,55];

array.forEach((currentvalue,index,array)=>{
    console.log(currentvalue,index,array);
    
});

console.log("==============Sum the array element================");
let sum =0;

array.forEach((element)=>{
    sum += element;
});
console.log(sum);

console.log("==============Log the only even array element================");

array.forEach((value)=>{
    if(value %2 == 0){
        console.log(value);
        
    }
});