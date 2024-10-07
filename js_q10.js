//  How to remove duplicates from an array of objects using JavaScript?

var student =[
    {id : 1 , name : "John Doe",grade: "A"},
    {id : 2 , name : "Jane Smith",grade: "B"},
    {id : 3 , name : "Samuel Green",grade: "C"},
    {id : 1 , name : "John Doe",grade: "A"},
    {id : 2 , name : "Jane Smith",grade: "B"},
    {id : 3 , name : "Samuel Green",grade: "C"}
];


function removeDuplicates(arr){
    return arr.filter((student,index,self)=>
    index == self.findIndex((t)=>(
        t.id == student.id && t.name == student.name
    ))
);
}
var uniquestudents = removeDuplicates(student);
console.table(uniquestudents);
