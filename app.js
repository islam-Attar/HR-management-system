'use strict';

let allEmployees = []
function Employee(employeeID, fullName, department, level)
{

 this.employeeID = employeeID;
 this.fullName = fullName;
 this.department = department;
 this.level = level;
 this.salary = 0;
 this. salaryAfterTax = 0;
 this.image = `./images/${this.fullName}.jpeg`;
 allEmployees.push(this);
}




var department = [ "Administration", "Marketing", "Development", "Finance"];
var level = ["Junior", "Mid-Senior", "Senior"];
var salaryAfterTax = 0;

Employee.prototype.getSalary = function()
{
  if(this.level == 'Senior' )
   return this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500;

  if(this.level == 'Mid-Senior')
   return this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000;

  if(this.level == 'Junior')
   return this.salary = Math.floor(Math.random() * (1000 - 500 + 1) ) + 500;

}

Employee.prototype.getTax = function(salary)
{
    return this.salaryAfterTax = salary - (salary * 0.075);
}

Employee.prototype.render = function()
{
  
  document.write("<h1>EMPLOYEES</h1>");

  for( let i = 0; i < allEmployees.length; i++)
  {
  document.write(`<p> <b>Empolyee name is: ${allEmployees[i].fullName}</b></p>`);
  document.write(`<p> ${allEmployees[i].fullName} Salary is: ${allEmployees[i].getSalary()}</p>`);
  document.write(`<p> ${allEmployees[i].fullName} Salary after tax is: ${allEmployees[i].getTax(allEmployees[i].salary)}</p>`);
  document.write('<br>');
  }
  
}


let ghazi = new Employee(1000, "GhaziSamer", "Administration", "Senior");
let lana = new Employee(1001, "LanaAli", "Finance", "Senior");
let tamara = new Employee(1002, "TamaraAyoub", "Marketing", "Senior");
let safi = new Employee(1003, "SafiWalid", "Administration", "Mid-Senior");
let omar = new Employee(1004, "OmarZaid", "Development", "Senior");
let rana = new Employee(1005, "RanaSaleh", "Development", "Junior");
let hadi = new Employee(1006, "HadiAhmad", "Finance", "Mid-Senior");


ghazi.render();
