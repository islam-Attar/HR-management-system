'use strict';

let allEmployees = []
function Employee(employeeID, fullName, department, level, salary)
{

 this.employeeID = employeeID;
 this.fullName = fullName;
 this.department = department;
 this.level = level;
 this.salary = salary;
 this.image = `./images/${this.fullName}.jpeg`
 allEmployees.push(this);
}




var department = [ "Administration", "Marketing", "Development", "Finance"];
var level = ["Junior", "Mid-Senior", "Senior"];
var salary = 0;
var salaryAfterTax = 0;

Employee.prototype.getSalary = function(min, max)
{
    return salary = Math.floor(Math.random() * (max - min)) + min;
}

Employee.prototype.getTax = function(salary)
{
    return salaryAfterTax = salary - (salary* 7.5);
}

Employee.prototype.render = function()
{
  document.write("<h1>EMPLOYEES</h1>")
  document.write(`<p> ${this.fullName}</p>`)
  document.write(`<p> ${this.salary}</p>`)
  document.write(`<img src=${this.image}>`);

}


let ghazi = new Employee(1000, "GhaziSamer", "Administration", "Senior", salary);
let lana = new Employee(1001, "LanaAli", "Finance", "Senior", salary);
let tamara = new Employee(1002, "TamaraAyoub", "Marketing", "Senior", salary);





ghazi.getSalary(1500, 2000);
ghazi.render();

lana.getSalary(1500, 2000);
lana.render();

tamara.getSalary(1500, 2000);
tamara.render();




  