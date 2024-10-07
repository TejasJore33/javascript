// Write a JavaScript program to get the length of a JavaScript object.

var car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    color : "blue"
};

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

console.log("Length of the car object: " +      getObjectLength(car));
