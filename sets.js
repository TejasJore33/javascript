// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Values as Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

// Display the Size
console.log(`the size of array is ${letters.size}`);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}

console.log(text);
