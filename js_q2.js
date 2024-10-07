// Write a javascript program to delete the rollno property from the object.Also print the object before or after deleting the property.

var student = {
    name : "Ravi Sharma",
    sclass : "VI",
    rollno : 101
};

console.log("Before deleting roll no: ");
console.log(student);
delete student.rollno;
console.log("After deleting rollno :");
console.log(student);



