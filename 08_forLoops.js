// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50

for (let index = 5; index <=50; index=index+5) { // index = 11

    console.log(index); // 0 1  2 ... 10 

}

console.log("After loop");

/ WAP to reverse the string --> JavaScript --> tpircSavaJ

// JavaScript -->

// initialization = 9

// condition index>=0

// update expression index--

var str = "JavaScript";

var reverseString = "";

for (let index = 9; index >= 0; index--) { // index = 9  8 

    var char = str.charAt(index);

    reverseString = reverseString.concat(char); 

}

console.log(reverseString);