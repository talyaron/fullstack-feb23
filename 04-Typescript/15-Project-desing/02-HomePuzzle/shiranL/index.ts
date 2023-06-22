
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
      const emploeeyclockbyID= employeesTimeClock.find(emploeeyclock=>emploeeyclock.employee.employeeID===id)
      if(setionID){
        setionEmployee=
        const newtimeclock = new TimeClock(setionID,true,currentDateTime,null);
        employeesTimeClock.push(newtimeclock);
        alert('Enter date and time saved: ' + dateTime);
      }
      
    } else if (action === 'exit') {
      localStorage.setItem('exitDateTime', dateTime);
      alert('Exit date and time saved: ' + dateTime);
    }
  }

renderEmployeeLogIN (LogINDiv);




