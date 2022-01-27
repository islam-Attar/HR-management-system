"use strict";

let allEmployees = [];
let parent = document.getElementById("parent")
let table = document.createElement("table");
parent.appendChild(table);
console.log(parent);




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









Employee.prototype.renderBodyTable = function(){
  let tr = document.createElement("tr");
  table.appendChild(tr);
   
  let tdOne = document.createElement("td");

  tdOne.textContent = this.name;
  tr.appendChild(tdOne);

  let tdTwo = document.createElement("td");
  tdTwo.textContent = this.price;
  tr.appendChild(tdTwo);

}

function renderHeader(){

  let newDiv = document.createElement('div');
  let tr = document.createElement("tr");
  table.appendChild(tr);
   
  let thOne = document.createElement("th");

  thOne.textContent = "Department Name";
  newDiv.appendChild(thOne);
  tr.appendChild(newDiv);

  let thTwo = document.createElement("th");
  newDiv.appendChild(thTwo);
  tr.appendChild(newDiv);
  thTwo.textContent = "# of employees";
  
  

  let thThree = document.createElement("th");
  thThree.textContent = "Average salary";
  newDiv.appendChild(thThree);
  tr.appendChild(newDiv);


  

 newDiv.style.fontSize = "12px";
 
 thOne.style.border = "1px solid black";

 thTwo.style.border = "1px solid black";

 thThree.style.border = "1px solid black";
 
 newDiv.style.border = "1px solid black";
}


function renderBody(){
  for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].renderBodyTable()
      
  }
}

renderHeader();
renderBody();
