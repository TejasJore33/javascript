console.log(`New DOM API`);

console.log(`===== Query Selector with element name=======`);

const elementH2 = document.querySelector("h2");

console.log(elementH2);

console.log(`===== Query Selector with id=======`);

const elementH2ByID = document.querySelector("#heading");

console.log(elementH2);

console.log(elementH2.innerHTML);

console.log(`===== Query Selector with class=======`);

const elementLearning = document.querySelector(".learning");

console.log(elementLearning);

console.log(elementLearning.innerHTML);

console.log(`======= Modifying element using QuerySelector ========`);

const elementH2Heading = document.querySelector("h2");

elementH2Heading.innerHTML = "Introduction of Dom - Document Object Model";

console.log(`===== Changing an attribute =======`);

const linkGoogleEle = document.querySelector("#linkGoogle");

linkGoogleEle.setAttribute("href", "https://www.google.com/");
