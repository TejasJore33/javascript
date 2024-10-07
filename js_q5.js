// How to modify an object’s property in an array of objects in JavaScript?

var employees = [
    {
        id : 1,
        name : " John Doe ",
        position : "Developer",
        salary : 50000
    },
];

function updateEmployeeSalary(id, newSalary) {
    for (var i = 0; i < employees.length; i++) {  
        if (employees[i].id == id) {
            employees[i].salary = newSalary;
            return;  
        }
    }
}

updateEmployeeSalary(1, 60000);
console.table(employees);
