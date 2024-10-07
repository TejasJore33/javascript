// Write a javascript program to list the properties of a javascript object.

var student ={
    name : "David Rayy",
    sclass: "VI",
    rollno : 12
};

var properties = Object.keys(student);
console.log(properties);