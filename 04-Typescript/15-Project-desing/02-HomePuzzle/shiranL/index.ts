
//MODEL

class Employee{
    constructor(public employeeID:number, public firsName:string, public lastName:string){}
}

const employees:Employee[]= [];
employees.push(new Employee(20156,"shiran","lasry"));
employees.push(new Employee(20123,"david","levy"))
console.log(employees);


class TimeClock{
    constructor(public employee:Employee, public status:boolean, public enterTime:Date, public exitTime:Date|null){}

    calkWorkTime(){
      debugger;
        try {
            if (!this.exitTime || !this.enterTime) throw new Error("missing enter or exit");

            const millisecondsPerHour = 1000 * 60 * 60; // Number of milliseconds in an hour
            const enterTimestamp = this.enterTime.getTime(); // Get the enter time as a timestamp
            const exitTimestamp = this.exitTime.getTime(); // Get the exit time as a timestamp
        
            if (enterTimestamp > exitTimestamp) {
                throw new Error("Invalid time range: enter time cannot be after exit time.");
            }
            const workTimeMilliseconds = exitTimestamp - enterTimestamp;
            const workTimeHours = workTimeMilliseconds / millisecondsPerHour;
    
            return workTimeHours;
        } 
        catch (error)
         { return 0;
            console.error(error); }

 }
}
const employeesTimeClock:TimeClock[]= [];

// view CONTROLERS

const LogINDiv: HTMLElement | null = document.querySelector("#LogIN")
const AddNewWorkerDiv: HTMLElement | null = document.querySelector("#AddNewWorker")
const clockiDiv: HTMLElement | null = document.querySelector("#clocki")
const ShowDetailsbtns: HTMLElement | null = document.querySelector("#ShowDetailsbtns")
const ShowDetails: HTMLElement | null = document.querySelector("#ShowDetails")
let setionID :number|null=null;

function renderEmployeeLogIN(rootElement: HTMLElement | null) {
    try {
        const html = ` <form class="LoginDiv" onsubmit="handleLogIN(event)">
        <label>LogIn</label>
        <input type="text" name="employeeID" id='employeeID' placeholder="ENERT ID" required>
        <input type="submit" value="ENTER">
    </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}
function RenderClock(rootElement: HTMLElement | null){
    try {
        const html = `<form>
        <button type="button" onclick="saveDateTime('enter')">Enter</button>
        <button type="button" onclick="saveDateTime('exit')">Exit</button>
      </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
function RenderBtnsDetails(rootElement: HTMLElement | null){
    try {
        const html = `<form>
        <button type="button" onclick="RenderIdForSerchEmployee()">serach ID</button>
        <button type="button" onclick="RenderShowByDate()">serach Date</button>
        </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
function RenderShowByDate(){
    try 
    {
        if (LogINDiv) {  LogINDiv.innerHTML = ""; }               // Remove all HTML content
        if (AddNewWorkerDiv) {  AddNewWorkerDiv.innerHTML = ""; }
    
        const html = `<form  onsubmit="ShowByDate(event)">
        <input type="Date" name="DateToSearch" id='DateToSearch' placeholder="Choose Date" required>
        <input type="submit" value="Search">
        <button type="button" onclick="RenderHomePage()">Back</button>
    </form>`
    if (!ShowDetailsbtns) throw new Error("No root element")

    ShowDetailsbtns.innerHTML = html;

        
    } catch (error) {
        console.error(error);}
}

function ShowByDate(event: any) {
    try {
      event.preventDefault();
      const dateToSearch = event.target.DateToSearch.valueAsDate; // get date from target
  
      // Filter employee time clock entries by the specified date
      const employeeTimesClockByDate = employeesTimeClock.filter(
        (employeeTime) =>
          employeeTime.enterTime.toDateString() === dateToSearch?.toDateString()
      );
  
      if (ShowDetails) {
        ShowDetails.innerHTML = ""; // Remove all content before rendering the table
  
        if (employeeTimesClockByDate.length > 0) {
          // Generate HTML elements and append them to the ShowDetails element
          const ul = document.createElement("ul");
  
          // Create a table for displaying details
          const table = document.createElement("table");
          table.innerHTML = `
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Enter</th>
              <th>Exit</th>
              <th>Total</th>
            </tr>
          `;
  
          // Iterate over the employee's time clock entries
          employeeTimesClockByDate.forEach((employeeTime) => {
            const {
              employee,
              enterTime,
              exitTime,
              calkWorkTime
            } = employeeTime;
  
            const row = document.createElement("tr");
  
            // Employee ID
            const idCell = document.createElement("td");
            idCell.textContent = employee.employeeID.toString();
            row.appendChild(idCell);
  
            // First Name
            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = employee.firsName;
            row.appendChild(firstNameCell);
  
            // Last Name
            const lastNameCell = document.createElement("td");
            lastNameCell.textContent = employee.lastName;
            row.appendChild(lastNameCell);
  
            // Enter Time
            const enterTimeCell = document.createElement("td");
            enterTimeCell.textContent = enterTime.toLocaleTimeString();
            row.appendChild(enterTimeCell);
  
            // Exit Time
            const exitTimeCell = document.createElement("td");
            exitTimeCell.textContent = exitTime
              ? exitTime.toLocaleTimeString()
              : "-";
            row.appendChild(exitTimeCell);
  
            // Hours per Day
            const hoursPerDayCell = document.createElement("td");
            hoursPerDayCell.textContent = exitTime
              ? `${Number(employeeTime.calkWorkTime()).toFixed(4)} hours`
              : "-";
            row.appendChild(hoursPerDayCell);
  
            table.appendChild(row);
          });
  
          ul.appendChild(table);
          ShowDetails.appendChild(ul);
        } else {
          const errorMessage = document.createElement("p");
          errorMessage.textContent = "No records found for the given date.";
          ShowDetails.appendChild(errorMessage);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  

function RenderIdForSerchEmployee(){
    try {
        if (LogINDiv) {  LogINDiv.innerHTML = ""; }               // Remove all HTML content
        if (AddNewWorkerDiv) {  AddNewWorkerDiv.innerHTML = ""; }
    
        const html = `<form  onsubmit="ShowByID(event)">
        <input type="number" name="SearchID" id='SearchID' placeholder="Search ID" required>
        <input type="submit" value="Search">
        <button type="button" onclick="RenderHomePage()">Back</button>
    </form>`
    if (!ShowDetailsbtns) throw new Error("No root element")

    ShowDetailsbtns.innerHTML = html;

        
    } catch (error) {
        console.error(error);}
}

function RenderHomePage(){
    if (ShowDetailsbtns) RenderBtnsDetails(ShowDetailsbtns);
    if (AddNewWorkerDiv) renderAddEmployee(AddNewWorkerDiv);
    if (LogINDiv) renderEmployeeLogIN(LogINDiv);
    if (ShowDetails) {  ShowDetails.innerHTML = ""; } 
    //if (ShowDetailsbtns) ShowDetailsbtns.innerHTML = ``;          
   
}
function resetAddEmployeeForm() {
    const form = document.querySelector("#addEmployeeForm") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  }
function renderAddEmployee(rootElement: HTMLElement | null){
    
    try {
        const html = `<form class="AddNewDiv" onsubmit="handAddEmployee(event)" id="addEmployeeForm">
        <label>Add New Employee</label>
        <input type="text" name="firstName" id='firstName' placeholder="First Name:" required>
        <input type="text" name="lastName" id='lastName' placeholder="Last Name:" required>
        <input type="number" name="newId" id='newId' placeholder="ID:" required>
        <input type="submit" value="ADD">
    </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
function ShowByID(event: any) {
    try {
        event.preventDefault();
        const id = event.target.SearchID.valueAsNumber; // get id from target
        // filter to find employee times clock in employees time clock array with target id
        const employeeTimesClockByID = employeesTimeClock.filter(
          (employeeTime) => employeeTime.employee.employeeID === id
        );
        if (ShowDetails) {    ShowDetails.innerHTML = ""; } //remove all content before render table
      
        // Generate HTML elements and append to ShowDetails element
        const ul = document.createElement("ul");
      
        // Add full name as a title
        if (employeeTimesClockByID.length > 0) {
          const fullName = `${employeeTimesClockByID[0].employee.firsName} ${employeeTimesClockByID[0].employee.lastName}`;
          const fullNameElement = document.createElement("h2");
          fullNameElement.textContent = `${fullName}`;
          ul.appendChild(fullNameElement);
      
          // Create a table for displaying details
          const table = document.createElement("table");
          table.innerHTML = `
            <tr>
              <th>Date</th>
              <th>Enter</th>
              <th>Exit</th>
              <th>Total</th>
            </tr>
          `;
      
          // Iterate over the employee's time clock entries
          
          employeeTimesClockByID.forEach((employeeTime) => {
            const { enterTime, exitTime } = employeeTime; // declare exit and enter
            const row = document.createElement("tr");
          
            // Date
            const dateCell = document.createElement("td");
            dateCell.textContent = enterTime.toDateString();
            row.appendChild(dateCell);
          
            // Enter Time
            const enterTimeCell = document.createElement("td");
            enterTimeCell.textContent = enterTime.toLocaleTimeString();
            row.appendChild(enterTimeCell);
          
            // Exit Time
            const exitTimeCell = document.createElement("td");
            exitTimeCell.textContent = exitTime ? exitTime.toLocaleTimeString() : "-";
            row.appendChild(exitTimeCell);
          
            // Hours per Day
            const hoursPerDayCell = document.createElement("td");
            hoursPerDayCell.textContent = exitTime
              ? `${Number(employeeTime.calkWorkTime()).toFixed(4)} hours`
              : "-";
            row.appendChild(hoursPerDayCell);
          
            table.appendChild(row);
          });
          
      
          ul.appendChild(table);
        } else {
          const errorMessage = document.createElement("p");
          errorMessage.textContent = "No records found for the given employee ID.";
          ul.appendChild(errorMessage);
        }
      
        if (ShowDetails) {
          ShowDetails.appendChild(ul);
        }
    }
    catch (error) {
        console.error(error)
    }
   
  }
  
function handAddEmployee(event :any){
try {
    event.preventDefault();
    const firstName= event.target.firstName.value;
    const lastName= event.target.lastName.value;
    const id= event.target.newId.valueAsNumber;
    if (!firstName || !lastName || !id) {
       alert("invalid data")
        throw new Error("invalid data") } 
        //set new employee
     const newEmployee = new Employee(id,firstName,lastName);
        // check if there is employee with same id 
     const employeeExists = employees.find(employee => employee.employeeID === id);

    if (employeeExists) { // if true do nothing
          alert('Employee exists!');
    } else { // push new employee
    employees.push(newEmployee);
    alert('Add Employee sucsess!');
    // reset form input
    resetAddEmployeeForm();}
} catch (error) {
    console.error(error);
}
}

function handleLogIN(event :any){
    try {
    event.preventDefault();
    setionID= event.target.employeeID.value;
 
    // find employee with target id
    const employeeLG :Employee|undefined= employees.find(function (employee) {
        return Number(employee.employeeID) === Number(setionID);  });
    if (!employeeLG){
        alert('Employee NOt Exists');
        setionID=null;
        throw new Error("Employee NOt Exists")}

    if (LogINDiv) { LogINDiv.innerHTML = ""; } // Remove all HTML content and render clock btns
    if (AddNewWorkerDiv) { AddNewWorkerDiv.innerHTML = ""; }
    if (ShowDetailsbtns) {   ShowDetailsbtns.innerHTML = "";   }
    RenderClock(clockiDiv)
    } 
    catch (error) {
        console.error(error);
    }
    
}

function saveDateTime(action) {
    try {
    const currentDateTime = new Date();
    const dateTime = currentDateTime.toLocaleString();

    if (action === 'enter') {
      const time= localStorage.setItem('enterDateTime', dateTime);
      if(setionID){
      
        //get employee
        const emploeeybyID= employees.find(emploeey=>emploeey.employeeID===Number(setionID))
        if(!emploeeybyID) {throw new Error(`cant find Employee with id ${setionID}`); }
       
        // check if employee alardy sing enter => if he have line in the array with statuse true

       const checkStatus = employeesTimeClock.find(employeeTime=>employeeTime.employee.employeeID
            ===Number(setionID) && employeeTime.status == true  )
        if (checkStatus) alert('Need To Exit First ');
        else{
            // if not - push new line to array
            const newtimeclock = new TimeClock(emploeeybyID,true,currentDateTime,null);
            employeesTimeClock.push(newtimeclock);
            alert('Enter date and time saved: ' + dateTime);
            // reset sestion
            setionID=null;

        }
        if (clockiDiv) { clockiDiv.innerHTML = ""; }// Remove all HTML content for enter and exit btns
        RenderHomePage();
      }
      
    } else if (action === 'exit') {
        
        // find the line of the employee with status true
        const employeeIndex = employeesTimeClock.findIndex((employeeTime) =>
        employeeTime.employee.employeeID === Number(setionID) && employeeTime.status == true
      );
      
        if (employeeIndex == -1) {alert('Enter Time Not Declare:'); }  //if there is no index=> the emlpoyee not sing enter
        else // update exit time and status
        {
            employeesTimeClock[employeeIndex].exitTime = currentDateTime;
            employeesTimeClock[employeeIndex].status = false;
            alert('Exit date and time saved: ' + dateTime);

        }
        if (clockiDiv) { clockiDiv.innerHTML = "";} // Remove all HTML content
        RenderHomePage();
    }} 
    catch (error) {
        console.error(error); 
    }
    
  }

  RenderHomePage();




