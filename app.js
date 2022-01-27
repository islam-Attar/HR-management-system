"use strict";

let allEmployees = [];
let employeesDiv = document.getElementById("employeesDiv");
let form = document.getElementById("form");

function Employee(employeeID, fullName, department, level, img) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  
  this.image = img;
  allEmployees.push(this);
}

var department = ["Administration", "Marketing", "Development", "Finance"];
var level = ["Junior", "Mid-Senior", "Senior"];


Employee.prototype.getSalary = function () {
  var x = 0;
  if (this.level == "Senior")
    x = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500);

  if (this.level == "Mid-Senior")
    x = (Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000);

  if (this.level == "Junior")
    x = (Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
    let tax = x * 0.075;
    x = x - tax;
    this.salary = x;
    return x ;
};


Employee.prototype.fourDigitsGenerator = function () {
  return (this.employeeID = Math.floor(1000 + Math.random() * 9000));
};


Employee.prototype.addEmployees = function()
{
  let newDiv = document.createElement('div');

  let image = document.createElement('img');
  newDiv.appendChild(image) 
  employeesDiv.appendChild(newDiv);
  image.setAttribute("src", this.image); 

 image.style.width = "200px";
 newDiv.style.backgroundColor = "#FEF";
 newDiv.style.width = "200px";

 let employeeID = document.createElement('p');
  newDiv.appendChild(employeeID);
  employeesDiv.appendChild(newDiv);
  employeeID.textContent = "Employee ID: " + this.fourDigitsGenerator();

  let name = document.createElement('p');
  newDiv.appendChild(name)
  employeesDiv.appendChild(newDiv);
  name.textContent = "Employee Name: " + this.fullName;
  

  let dep = document.createElement('p');
  newDiv.appendChild(dep);
  employeesDiv.appendChild(newDiv);
  dep.textContent = "Department: " + this.department;

  let level = document.createElement('p');
  newDiv.appendChild(level);
  employeesDiv.appendChild(newDiv);
  level.textContent = "Level: " + this.level;

  let salary = document.createElement('p');
  newDiv.appendChild(salary);
  employeesDiv.appendChild(newDiv);
  salary.textContent = "Salary: " + this.getSalary();


}



function handleSubmit(event)
{
  console.log(event);
    event.preventDefault();
   let employeeID = this.employeeID;
   let fullName = event.target.fullName.value;
   let departments = event.target.Departments.value;
   let level = event.target.Level.value;
   let image = event.target.images.value;

  let newEmployee = new Employee(employeeID, fullName, departments, level, image)
  
  newEmployee.fourDigitsGenerator();
  newEmployee.getSalary();
  newEmployee.addEmployees();
  newEmployee.saveToLocalStorage();

}

form.addEventListener("submit", handleSubmit);
  



 function renderAll() {

  allEmployees.forEach(element => {

    element.addEmployees();
    
  });
 
};




Employee.prototype.saveToLocalStorage = function()
{
  let stringifiedData = JSON.stringify(allEmployees);
    localStorage.setItem("employees", stringifiedData);
}

function getData() {
  let data = localStorage.getItem("employees");
  let parseData = JSON.parse(data);
  if (parseData != null) {
      console.log(parseData);
     
      for (let i = 0; i < parseData.length; i++) {
          console.log(parseData[i]);
          new Employee(parseData[i].employeeID, parseData[i].fullName, parseData[i].departments, parseData[i].level, parseData[i].image)
      }
  }
  renderAll();  
}








let ghazi = new Employee(1000, "GhaziSamer", "Administration", "Senior", "./assets/ghaziSamer.png");
let lana = new Employee(1001, "LanaAli", "Finance", "Senior","./assets/LanaAli.png");
let tamara = new Employee(1002, "TamaraAyoub", "Marketing", "Senior","./assets/TamaraAyoub.png");
let safi = new Employee(1003, "SafiWalid", "Administration", "Mid-Senior","./assets/SafiWalid.png");



getData();


