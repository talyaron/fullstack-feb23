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
}

//----------------TimeClock--------------
class TimeClock {
  constructor(
    public date = new Date(),
    public entranceTime: Time,
    public exitTime: Time,
  ) {}
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

  editEntranceTimeByDate(dateToEdit: Date, newEntranceTime: Time) {
    this.hoursWork.find((day) => {
      day.date == dateToEdit;
    })!.entranceTime = newEntranceTime;
  }

  getSumWorkingHours() {
    let sumImMin = 0;
    this.hoursWork.forEach((timeClock) => {
      sumImMin +=
        timeClock.exitTime.hours * 60 +
        timeClock.exitTime.minutes -
        (timeClock.entranceTime.hours * 60 + timeClock.entranceTime.minutes);
    });
    return new Time(Math.floor(sumImMin / 60), sumImMin % 60);
  }
}


const employeesHour:EmployeeHours[] = []
employees.forEach(employee => employeesHour.push(new EmployeeHours(employee, emptyTimeClock)))


//  render select employee
function renderSelectUser() {
  const selectDiv = document.querySelector("#selectUserDiv") as HTMLDivElement;
  selectDiv.innerHTML = `
    <form id="selectUserForm" >
    <label for="selectUser">select user:</label>
    <select name="selectUser" id="selectUser" onchange="handleUser(event)">
    ${employees
      .map(
        (employee) =>
          `<option value="${employee.ID}">${employee.firstName} ${employee.lastName}</option>`,
      )
      .join("")}
        </select>
        </form>
        `;
}

//handle select user--
function handleUser(event: Event) {
  event.preventDefault();
  const chosenUserId = (event.target as HTMLSelectElement).value;
  console.log(chosenUserId);

  const chosenEmployee = employees.find(
    (employee) => employee.ID === chosenUserId,
  );
  console.log(chosenEmployee);
}

//create uniq id by Date, from google...
function createID() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}
