// Title Case a Sentence: Write a function that converts the first letter of each word 
// in a string to uppercase (e.g., "hello world" $\rightarrow$ "Hello World").

function toUpper(str){
    str.split(' ').map(word => word.charAt(0).toUpperCase() + word.s)
    
}

console.log(toUpper("hello world"));