let bankSbi={
    name:"SBI",
    branch:"pune",
    accountType:"saving",
    accountHolderName:"tejas"
}
console.log(bankSbi);
console.table(bankSbi)
let bankLocation={
    street:"baner",
    city:"pune",
    pin:412101
}
console.log(bankLocation);
console.table(bankLocation);


Object.assign(bankSbi , bankLocation);
console.log(bankSbi);
console.table(bankSbi);

let rateOfInterest={
    honeLoanInterest:"10%",
    personalLoanInterest:"12%",
    duelInterest:"15%"
}
console.log(rateOfInterest);
console.table(rateOfInterest);

let sbiDetails={


}
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);

console.log(sbiDetails);
console.table(sbiDetails);

for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}