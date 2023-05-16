function squareOfWordLenth(word){
    var wordlt=word.length;
    console.log(`The length of ${word} is ${wordlt}`);
    var result=wordlt*wordlt;
    console.log(`The square of word length is ${result}`);
}
squareOfWordLenth("javaScript");
squareOfWordLenth("Google Chrome");
squareOfWordLenth("Developer Smart");

function Angular(){
    var strdev="I am Angular Developer";
    var strdevlen=strdev.length;
    console.log(`The length of the string is ${strdevlen}`);
    var wordcount=strdev.trim().split(/\s+/).length;
    console.log(`no of words in strdev is ${wordcount}`);
    var divide=strdevlen/wordcount;
    console.log(`The division of length and total word is ${divide}`);
    var multi=strdevlen*wordcount;
    console.log(`The multiplication of length and total word is :${multi}`);
}
Angular();