function maleMariageEligibility(gender,age,boyName){
    var result=(gender=="Male" && age>21) ? `${boyName} you are eligible for Marriage`:`${boyName} you are not eligible for Marriage`
    console.log(`${result}`);
}
maleMariageEligibility("Male",25,"Billgates");
maleMariageEligibility("Male",17,"Stew Jobs");

console.log("------------------------------------------------------------");
console.log("2.");
function femaleMarriageEligibility(gender,age,girlname){
    var result=(gender=="Female" && age>18)?`${girlname}you are eligible for Marriage.`:`${girlname} you are not eligible for the marriage.`
    console.log(`${result}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");