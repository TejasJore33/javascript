//shallow clone using assignment operator
const arrayNum=[20,3,4,56,90,400,49];
const cloneArrayNum=arrayNum;
cloneArrayNum.push(55,66);
console.log("===========original array============");
console.log(arrayNum);
console.log("===========shallow clone============");
console.log(cloneArrayNum);

//deep clone using speread operator
console.log("===========deep clone============");
const deepCloneArrayNum=[...arrayNum];
arrayNum.push(10,25);
console.log("===========cloned array============");
console.log(deepCloneArrayNum);
console.log("===========original array============");
console.log(arrayNum);

console.log("======================================");
const arrayEven=[2,30,14,8];
const spreadMerge=[...arrayEven,...arrayNum];
console.log("Merge array using spread opreator");
console.log(spreadMerge);

const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vridavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 456 32","+91-9096 5678 77"]
}
console.log("Locality=",employee_info.address.locality,"city=",employee_info.address.city,"state=",employee_info.address.state,"country=",employee_info.address.country);
console.log("mobiles=",employee_info.mobiles);

const deepCloneEmployee_info = JSON.parse(JSON.stringify(employee_info));
deepCloneEmployee_info.salary.july_month="80,0000INR";
employee_info.address.country="United Kingdom";
console.log("========original object=============");
console.log("updated country",employee_info.address.country);
console.log("==============deepcloned object============");
console.log(deepCloneEmployee_info.salary,"country=",deepCloneEmployee_info.address.country);