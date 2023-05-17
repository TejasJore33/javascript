var TCS=function Eligibility(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70 ||hscScore>=80 || sscScore>=90 ?`Congrates🎉🎊 ${candidateName} you are eligible for TCS interview`:` Unfortunately😔😔 ${candidateName} you are not eligible for interview`;
    console.log(`${result}`);
}
TCS(80,86,90,'TEJAS');
console.log("==========================");
TCS(70,65,55,'PRANAV');
console.log("==========================");
TCS(60,79,88,'ROHIT');
