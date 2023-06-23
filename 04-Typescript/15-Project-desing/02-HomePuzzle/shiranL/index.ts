
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
         { console.error(error); }

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
        <button type="button" onclick="ShowByDate()">serach Date</button>
        </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
function RenderIdForSerchEmployee(){
    try {
        if (LogINDiv) {  LogINDiv.innerHTML = ""; }               // Remove all HTML content
        if (AddNewWorkerDiv) {  AddNewWorkerDiv.innerHTML = ""; }
    
        const html = `<form  onsubmit="ShowByID(event)">
        <input type="number" name="SearchID" id='SearchID' placeholder="Search ID" required>
        <input type="submit" value="Search">
        <button type="button" onclick="GoHome()">Back</button>
    </form>`
    if (!ShowDetailsbtns) throw new Error("No root element")

    ShowDetailsbtns.innerHTML = html;

        
    } catch (error) {
        console.error(error);}
}

function GoHome(){
    if (ShowDetailsbtns) ShowDetailsbtns.innerHTML = ``;
    RenderHomePage();
}
function RenderHomePage(){
    if (ShowDetailsbtns) RenderBtnsDetails(ShowDetailsbtns);
    if (AddNewWorkerDiv) renderAddEmployee(AddNewWorkerDiv);
    if (LogINDiv) renderEmployeeLogIN(LogINDiv);
    if (ShowDetails) {  ShowDetails.innerHTML = ""; }               // Remove all HTML content
   
}

function renderAddEmployee(rootElement: HTMLElement | null){
    
    try {
        const html = `<form class="AddNewDiv" onsubmit="handAddEmployee(event)">
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
    event.preventDefault();
    const id = event.target.SearchID.valueAsNumber;
    const employeeTimesClockByID = employeesTimeClock.filter(
      (employeeTime) => employeeTime.employee.employeeID === id
    );
    if (ShowDetails) {
      ShowDetails.innerHTML = "";
    }
  
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
          <th>Enter Time</th>
          <th>Exit Time</th>
          <th>Hours per Day</th>
        </tr>
      `;
  
      // Iterate over the employee's time clock entries
      for (const employeeTime of employeeTimesClockByID) {
        const { enterTime, exitTime } = employeeTime;
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
          ? `${employeeTime.calkWorkTime()} hours`
          : "-";
        row.appendChild(hoursPerDayCell);
  
        table.appendChild(row);
      }
  
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
  
function handAddEmployee(event :any){
try {
   
    event.preventDefault();
    const firstName= event.target.firstName.value;
    const lastName= event.target.lastName.value;
    const id= event.target.newId.valueAsNumber;
    if (!firstName || !lastName || !id) throw new Error("invalid data")

     const newEmployee = new Employee(id,firstName,lastName);

     const employeeExists = employees.find(employee => employee.employeeID === id);

if (employeeExists) {
  alert('Employee exists!');
} else {
    employees.push(newEmployee);
    alert('Add Employee sucsess!');
}
if (AddNewWorkerDiv) {
    AddNewWorkerDiv.innerHTML = "";  }// Remove all HTML content
    RenderHomePage();
} catch (error) {
    console.error(error);
}
}

function handleLogIN(event :any){
    try {
    event.preventDefault();
    setionID= event.target.employeeID.value;
 
    const employeeLG :Employee|undefined= employees.find(function (employee) {
        return Number(employee.employeeID) === Number(setionID);  });
    if (!employeeLG){
        alert('Employee NOt Exists');
        throw new Error("Employee NOt Exists")
    }
    if (LogINDiv) {
        LogINDiv.innerHTML = ""; // Remove all HTML content
      }
      if (AddNewWorkerDiv) {
        AddNewWorkerDiv.innerHTML = ""; // Remove all HTML content
      }
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




