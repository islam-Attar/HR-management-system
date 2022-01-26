"use strict";

let allEmployees = [];
let employeesDiv = document.getElementById("employees");
let btn = document.getElementById("btn");
employeesDiv.appendChild(btn);

let form = document.getElementById("form");


function Employee(employeeID, fullName, department, level, img) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  this.salaryAfterTax = 0;
  this.image = img;
  allEmployees.push(this);
}

var department = ["Administration", "Marketing", "Development", "Finance"];
var level = ["Junior", "Mid-Senior", "Senior"];
var salaryAfterTax = 0;

Employee.prototype.getSalary = function () {
  if (this.level == "Senior")
    return (this.salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);

  if (this.level == "Mid-Senior")
    return (this.salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000);

  if (this.level == "Junior")
    return (this.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
};

Employee.prototype.getTax = function (salary) {
  return (this.salaryAfterTax = salary - salary * 0.075);
};

Employee.prototype.fourDigitsGenerator = function () {
  return (this.employeeID = Math.floor(1000 + Math.random() * 9000));
};

Employee.prototype.addEmployees = function()
{
  let name = document.createElement('<p>');
  name.textContent = this.fullName;
  employeesDiv.appendChild(name);

  let dep = document.createElement('<p>');
  employeesDiv.appendChild(dep);
  dep.textContent = this.department;

  let level = document.createElement('<p>');
  employeesDiv.appendChild(level);
  level.textContent = this.level;

  let image = document.createElement('img');
  employeesDiv.appendChild(image);
  image.setAttribute("src", this.image);



  
}



form.addEventListener("submit", handleSubmit)

function handleSubmit(event)
{
   event.preventDefault();
   console.log(event);
   let fullName = event.target.fullName.value;
   console.log(drinkName);

}




Employee.prototype.render = function () {
  document.write("<h1>EMPLOYEES</h1>");

  for (let i = 0; i < allEmployees.length; i++) {
    document.write(
      `<p> <b>Empolyee ID is: ${allEmployees[i].fourDigitsGenerator()}</b></p>`
    );
    document.write(
      `<p> <b>Empolyee name is: ${allEmployees[i].fullName}</b></p>`
    );
    document.write(
      `<p> <b>${allEmployees[i].fullName} Salary is: ${allEmployees[
        i
      ].getSalary()}</b></p>`
    );
    document.write(
      `<p> <b>${allEmployees[i].fullName} Salary after tax is: ${allEmployees[
        i
      ].getTax(allEmployees[i].salary)}</b></p>`
    );

    document.write(
      `<img src = "${allEmployees[i].image}"`
    );

    document.write("<br>");
  }
};

let ghazi = new Employee(1000, "GhaziSamer", "Administration", "Senior", "./assets/ghaziSamer.png");
let lana = new Employee(1001, "LanaAli", "Finance", "Senior","./assets/LanaAli.png");
let tamara = new Employee(1002, "TamaraAyoub", "Marketing", "Senior","./assets/TamaraAyoub.png");
let safi = new Employee(1003, "SafiWalid", "Administration", "Mid-Senior","./assets/SafiWalid.png");


ghazi.render();
