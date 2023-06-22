
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

function renderEmployeeLogIN(rootElement: HTMLElement | null) {
    try {
        const html = ` <form onsubmit="handleLogIN(event)">
        <label for="employeeID">ID: </label>
        <input type="text" name="employeeID" id='employeeID' placeholder="ENERT ID" required>
        <input type="submit" value="ENTER">
    </form>`
       


        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}
function renderClock(rootElement: HTMLElement | null){
    try {
        const html = `<form>
        <button type="button" onclick="saveDateTime('enter',${setionID})">Enter</button>
        <button type="button" onclick="saveDateTime('exit',${setionID})">Exit</button>
      </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
function renderAddEmployee(rootElement: HTMLElement | null){
    try {
        const html = `<form onsubmit="handAddEmployee(event)">
        <label for="firstName">First Name: </label>
        <input type="text" name="firstName" id='firstName' placeholder="First Name:" required>
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" id='lastName' placeholder="Last Name:" required>
        <label for="newId">ID: </label>
        <input type="number" name="newId" id='newId' placeholder="ID:" required>
        <input type="submit" value="ADD">
    </form>`
       
        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
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
    console.log(employees);
    
}
if (AddNewWorkerDiv) {
    AddNewWorkerDiv.innerHTML = ""; // Remove all HTML content
  }
  renderEmployeeLogIN(LogINDiv);
  renderAddEmployee(AddNewWorkerDiv);

    
} catch (error) {
    console.error(error);
  
}
   
}
let setionID;
function handleLogIN(event :any){

    event.preventDefault();
    setionID= event.target.employeeID.value;
 
    const employeeLG :Employee|undefined= employees.find(function (employee) {
        return Number(employee.employeeID) === Number(setionID);  });
    if (!employeeLG){throw new Error("Employee NOt Exists")}

    renderClock(clockiDiv)


    if (LogINDiv) {
        LogINDiv.innerHTML = ""; // Remove all HTML content
      }
      if (AddNewWorkerDiv) {
        AddNewWorkerDiv.innerHTML = ""; // Remove all HTML content
      }
}

function saveDateTime(action, id ) {
    
    const currentDateTime = new Date();
    const dateTime = currentDateTime.toLocaleString();

    if (action === 'enter') {
     
      const time= localStorage.setItem('enterDateTime', dateTime);
      
      if(setionID){
      
        const emploeeybyID= employees.find(emploeey=>emploeey.employeeID===id)
        if(!emploeeybyID) throw new Error(`cant find Employee with id ${id}`)

        const checkStatus = employeesTimeClock.find(employeeTime=>employeeTime.employee.employeeID===id &&
            employeeTime.status == true  )
        if (checkStatus) alert('Need To Exit First ');
        else{
            if(!emploeeybyID) throw new Error(`cant find Employee with id ${id}`)

            const newtimeclock = new TimeClock(emploeeybyID,true,currentDateTime,null);
            employeesTimeClock.push(newtimeclock);
            alert('Enter date and time saved: ' + dateTime);
            setionID=null;

        }
        if (clockiDiv) {
            clockiDiv.innerHTML = ""; // Remove all HTML content
          }
          renderEmployeeLogIN(LogINDiv);
          renderAddEmployee(AddNewWorkerDiv);

       
      }
      
    } else if (action === 'exit') {
        
        console.log(employeesTimeClock);
        
        const employeeIndex = employeesTimeClock.findIndex((employeeTime) =>
        employeeTime.employee.employeeID === Number(id) && employeeTime.status == true
      );
      
        if (employeeIndex == -1) {
            alert('Enter  time not declare:'); 
        }
        else
        {
            employeesTimeClock[employeeIndex].exitTime = currentDateTime;
            employeesTimeClock[employeeIndex].status = false;
            console.log(employeesTimeClock);
            alert('Exit date and time saved: ' + dateTime);

        }
        if (clockiDiv) {
            clockiDiv.innerHTML = ""; // Remove all HTML content
          }
          renderEmployeeLogIN(LogINDiv);
          renderAddEmployee(AddNewWorkerDiv);

    }
  }

renderEmployeeLogIN (LogINDiv);
renderAddEmployee(AddNewWorkerDiv);




