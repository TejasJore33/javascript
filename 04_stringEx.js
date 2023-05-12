function stringHandsOn(){
    var sentence="   Hey you are doing good, keep it up     ";
    console.log(sentence);
    var sentenceLength=sentence.length;
    console.log("length of string is:",sentenceLength);
    var sentenceTrim=sentence.trim();
    console.log("Trimed sentence is:",sentenceTrim);
    var trimedLength=sentenceTrim.length;
    var extraSpace=sentenceLength-trimedLength;
    console.log("Extra spaces are:",extraSpace);
    var firstChar=sentenceTrim.charAt(0);
    console.log("First character of the sentence is:",firstChar);
    var lastChar=sentenceTrim.charAt(trimedLength-1);
    console.log("Last character of the sentence is:",lastChar);

}
stringHandsOn();