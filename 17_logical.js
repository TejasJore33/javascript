const array = [10, 5, "a", "b", "h", 11];

const number = (value) => (typeof value === "number") & !isNaN(value);
const sortNumber = (a, b) => a - b;
const numbers = array.filter(number).sort(sortNumber);
const alphabets = array.filter((value) => !number(value)).sort();
console.log("The given array is:",array);
console.log("Sorted Numbers:", numbers.join(","));
console.log("Sorted Alphabets:", alphabets.join(","));
