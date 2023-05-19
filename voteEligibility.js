function voteEligibility(age){
    if (age==null || age==undefined) {
        console.log(`Invalid Input Age: ${age} ` ); 
     } else if (age<=0 || age>=120) {
        console.log(`${age} invalid data`);
       }  else if (age<=18 ) {
            console.log(`${age} is not eligible for vote`);} 
     else {
        console.log(`${age} is eligible for vote`);
     
}
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);