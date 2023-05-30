let professor ={
    name:'tejas',
    college:"coep",
    subject:"Angular",
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        masters:'MCA'
    },
    certificate:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
    concatDegrees: function() {
        return this.professor.degrees(' ');
      }
}
const allDegrees = professor.concatDegrees();
console.log("Teacher degrees are: " + allDegrees + ". Total degrees are: " + allDegrees.length);
