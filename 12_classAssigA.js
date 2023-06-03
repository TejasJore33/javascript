class Vehicle {
  constructor(model, color, speed, milage, weight) {
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.milage = milage;
    this.weight = weight;
  }
  showDetails() {
    console.log(
      `Details is ${this.model}, ${this.color}, ${this.speed}, ${this.milage},${this.weight}`);
  }
}
const vechile1 = new Vehicle("ford", "RED", 120, 10, 200);
const vechile2 = new Vehicle("maruti", "WHITE", 80, 20, 300);
const vechile3 = new Vehicle("kiwi", "WHITE", 70, 10, 150);
const vechile4 = new Vehicle("BMW", "YEOLLO", 200, 8, 100);

arrayOfVehices = [vechile1, vechile2, vechile3, vechile4];
console.log(arrayOfVehices[0]);
console.log(arrayOfVehices[1]);
console.log(arrayOfVehices[2]);
console.log(arrayOfVehices[3]);


class College{
    constructor(collegeName,department,location,fees){
        this.collegeName=collegeName;
        this.department=department;
        this.location=location;
        this.fees=fees;
    }
    showDetails(){
        console.log(`details are ${this.collegeName},${this.department},${this.location},${this.fees}`)
    }
}
const clg1=new College("D.Y.PATIL","CS","AKURDY",85000);
const clg2=new College("COEP","CIVIL","SHIVAJINAGAR",150000);
const clg3=new College("AISSM","E & TC","PUNE",50000);
const clg4=new College("SYMBOSIS","MEDICAL","SUS",100000);

clg1.showDetails();
clg2.showDetails();
clg3.showDetails();
clg4.showDetails();

