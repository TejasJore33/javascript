// How to use array that include and check an object against a property of an object?

var student =[
    {id : 1 , name : "John Doe",grade: "A"},
    {id : 2 , name : "Jane Smith",grade: "B"},
    {id : 3 , name : "Samuel Green",grade: "C"}
];

function checkStudentExists(id) {
    return student.filter(student => student.id == id).length > 0;
}
console.log(checkStudentExists(2));
console.log(checkStudentExists(4));

