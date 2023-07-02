//----------------Employee--------------
class Employee {
  ID: string;
  constructor(public firstName: string, public lastName: string) {
    this.ID = createID();
  }
}

const employees: Employee[] = [
  new Employee("Ruth", "BenTov"),
  new Employee("Amitai", "BenTov"),
];

//--------------Time-----------------
class Time {
  constructor(public hours: number, public minutes: number) {
    //validate time is valid or default value = 0
    this.hours = hours < 24 && hours > 0 ? hours : 0;
    this.minutes = minutes < 60 && minutes > 0 ? minutes : 0;
  }
  getTimeToString(){
    return `${this.hours}:${this.minutes}`
  }
}

//----------------TimeClock--------------
class TimeClock {
  constructor(
    public date = new Date(),
    public entranceTime: Time,
    public exitTime: Time,
  ) {}

  getDate(){
    return `${this.date.getDate()}/${this.date.getMonth() + 1}`
  }
  getEntranceTime(){
    return `${this.entranceTime.hours}:${this.entranceTime.minutes}`
  }
  getExitTime(){
    return`${this.exitTime.hours}:${this.exitTime.minutes}`
  }

  getTotal(){
   const sumInMin = this.exitTime.hours * 60 + this.exitTime.minutes - (this.entranceTime.hours * 60 + this.entranceTime.minutes);
    return new Time((Math.floor(sumInMin / 60)), sumInMin % 60).getTimeToString()   ;
  }
}


const emptyTimeClock:TimeClock[] = []
const timesClock1: TimeClock[] = [
  new TimeClock(new Date(), new Time(10, 45), new Time(17, 34)),
  new TimeClock(new Date(), new Time(9, 25), new Time(14, 14)),
  new TimeClock(new Date(), new Time(10, 45), new Time(15, 50))
];

//----------------UserHours---------------
class EmployeeHours {
  constructor(public employee: Employee, public hoursWork: TimeClock[]) {}
  

  addingWorkingHours(workTime: TimeClock) {
    this.hoursWork.push(workTime);
  }
  addingArrayWorkingHours(workTime: TimeClock[]) {
    this.hoursWork = this.hoursWork.concat(workTime)
  }

  editEntranceTimeByDate(dateToEdit: Date, newEntranceTime: Time) {
    this.hoursWork.find((day) => {
      day.date == dateToEdit;
    })!.entranceTime = newEntranceTime;
  }

  getSumWorkingHours() {
    let sumImMin = 0;
    this.hoursWork.forEach((timeClock) => {
      sumImMin +=
        timeClock.exitTime.hours * 60 + timeClock.exitTime.minutes - (timeClock.entranceTime.hours * 60 + timeClock.entranceTime.minutes);
    });
    return new Time((Math.floor(sumImMin / 60)), sumImMin % 60).getTimeToString()   ;
  }
}


const employeesHours:EmployeeHours[] = []
employees.forEach(employee => employeesHours.push(new EmployeeHours(employee, emptyTimeClock)))
employeesHours[1].addingArrayWorkingHours(timesClock1)


//  render select employee
function renderSelectUser() {
  const userForm = document.querySelector("#userForm") as HTMLDivElement;
  userForm.innerHTML = `
    <label for="selectUser">select user:</label>
    <select name="selectUser" id="selectUser" onchange="handleUser(event)" required>
    ${employeesHours
      .map(
          (employee) =>
          `<option value="${employee.employee.ID}">${employee.employee.firstName} ${employee.employee.lastName}</option>`,
          )
          .join("")}
          </select><br>
          `
        }
        
        //render Time Input in form---
        function renderTimeInput(){
            const addTimeForm = document.querySelector("#addTimeForm") as HTMLDivElement;
            addTimeForm.innerHTML =`
            <label for="date">date:</label>
            <input id="date" type="date" required>
            <div class="timesInput">
            <div class="entranceInputLabel">
            <label for="entranceTime">entrance:</label>
            <input id="entranceTime" type="time" required>
            </div>
            <div class="leavingInputLabel">
            <label for="exitTime">exit:</label>
            <input id="exitTime" type="time" required>
             </div>
            </div>
            <button type="submit">ADD</button>
            `
}

//onclick on add button this function called. pay attention, it 2 function callback init
function addTimeToEmployee(event){
    handleUser(event)!.addingWorkingHours(handleTime(event))
    renderTimeInput()
}

//handle select user--return an employee to submit function
function handleUser(event: Event) {
    event.preventDefault();
    const chosenUserId = (document.querySelector("#selectUser") as HTMLSelectElement).value;
    const chosenEmployee = employeesHours.find(
    (employee) => employee.employee.ID === chosenUserId,
  );

  if (chosenEmployee) {
    return chosenEmployee;}
}

//handle selected Time--return time to submit function
function handleTime(event){
    event.preventDefault();
    const entranceTime = (document.querySelector("#entranceTime")as HTMLInputElement).value;
    const [entranceHour,entranceMin] = entranceTime.split(":");
    const exitTime = (document.querySelector("#exitTime")as HTMLInputElement).value;
    const [exitHour,exitMin] = exitTime.split(":");
    const newTime = new TimeClock(
        new Date((document.querySelector("#date")as HTMLInputElement).value), 
        new Time (parseInt(entranceHour), parseInt(entranceMin)), 
        new Time(parseInt(exitHour),parseInt(exitMin)))
    return newTime;
}




function getEmployeeHours(){
    const employeeId = (document.querySelector("#selectUser")as HTMLSelectElement).value
    console.log(
      employeesHours
    );
    const chosenEmployeeWork = employeesHours.find(empl =>{return empl.employee.ID == employeeId})
    const table = document.querySelector("#tableUser") as HTMLDivElement
    table.innerHTML =`
    <table>
    <tr> <th>User Name</th> <th>Date</th> <th>Entrance</th> <th>Leaving</th> <th>Total</th></tr>
       
        ${chosenEmployeeWork!.hoursWork.map(day => `<tr><td>${chosenEmployeeWork!.employee.firstName} ${chosenEmployeeWork!.employee.lastName}</td><td>${day.getDate()}</td> <td>${day.getEntranceTime()}</td><td>${day.getExitTime()}</td><td>${day.getTotal()}</td></tr>`).join("")}
        <tr><td>ALL Hours</td><td>${chosenEmployeeWork!.getSumWorkingHours()}</td></tr>
    </table> ` 
}

function getAllUserHours(){
    const table = document.querySelector("#tableUser") as HTMLDivElement    
    table.innerHTML= `<table> 
        <tr> <th>User Name</th> <th>Date</th> <th>Entrance</th> <th>Leaving</th> <th>Total</th></tr>
        ${employeesHours.map(empl=> empl.hoursWork.map(day=>`<tr><td>${empl.employee.firstName} ${empl.employee.lastName}</td><td>${day.getDate()}</td><td>${day.getEntranceTime()}</td><td>${day.getExitTime()}</td><td>${day.getTotal()}</td></tr>`).join(" ")).join(" ")}
        ${employeesHours.map(empl=>`<tr><td>${empl.employee.firstName} ${empl.employee.lastName} Hours</td><td>${empl.getSumWorkingHours()}</td></tr>`)}
        </table>`
    
}


function addBtnNewUser(){
  const html = document.body
  html.innerHTML +=`
  <button id="addNewUser" onClick="newUserBtnClicked()">new user</button>` 

}
addBtnNewUser()

function newUserBtnClicked(){
  const newUserFirstName = prompt("first name:")
  const newUserLastName = prompt("last name:")
  const newEmployee = new EmployeeHours(new Employee(newUserFirstName!, newUserLastName!),emptyTimeClock)
  employeesHours.push(newEmployee)
  renderSelectUser()
  alert(`${newUserFirstName} is add to User`)

}


//create uniq id by Date, from google...
function createID() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}


