function stringHandsOn(){
    console.log("1.print the string as it is on console");
    var sentence="   Hey you are doing good, keep it up     ";
    console.log(sentence);
    console.log("------------------------------------------------------");
    console.log("Calculate the length of the string");  
    var sentenceLength=sentence.length;
    console.log("length of string is:",sentenceLength);
    console.log("------------------------------------------------------");
    console.log("Remove the leading and tralling extra spaces and log string on console with its length");
    var sentenceTrim=sentence.trim();
    console.log("Trimed sentence is:",sentenceTrim);
    var trimedLength=sentenceTrim.length;
    console.log("------------------------------------------------------");
    console.log("print the total number extra spaces count that is romoved in step 3");
    var extraSpace=sentenceLength-trimedLength;
    console.log("Extra spaces are:",extraSpace);
    console.log("------------------------------------------------------");
    console.log("Print the first and last character on the same line after trim()   ");
    var firstChar=sentenceTrim.charAt(0);
    console.log("First character of the sentence is:",firstChar);
    var lastChar=sentenceTrim.charAt(trimedLength-1);
    console.log("Last character of the sentence is:",lastChar);
    console.log("------------------------------------------------------");
    console.log("print the count of total words available in the string after step 3");
    var countAfterTrim=sentenceTrim.length;
    console.log("Count of the string after trim is :",countAfterTrim);
    console.log("------------------------------------------------------");
    console.log("Print the index of word 'good' from the given string");
    var good=sentence.indexOf('good');
    console.log("The index of good is :",good);
    console.log("------------------------------------------------------");
    console.log("print the substring starting from index 22,using substring() and slice()");
    var newString=sentence.substring(22)
    console.log("The substring after using subtring :",newString);
    var newStringSlice=sentence.slice(22)
    console.log("The substring after using slice :",newStringSlice);
    console.log("------------------------------------------------------");
    console.log("Check,is string ends with word 'up' after step 3");
    var checkEnds=sentenceTrim.endsWith("up")
    console.log("The string ends with up is :",checkEnds);
    var checkStarts=sentenceTrim.startsWith("Hey")
    console.log("The string starts with hey is :",checkStarts);
}
stringHandsOn();