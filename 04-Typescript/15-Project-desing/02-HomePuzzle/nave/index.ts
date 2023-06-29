// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details



const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Model
class Employee {
  id: string;
  constructor(public userName: string, public email: string) {
    this.id = uid();
  }
}

const employees: Employee[] = [
  new Employee("nave", "vnavev@gmail.com"),
  new Employee("lior", "lior@gmail.com"),
];

class HoursDaily {
  id: string;
  constructor(public worker: string, public entrance: any, public exit: any) {
    this.id = uid();
  }

  calculateDailyHours(): number | undefined {
    try {
      const exitHour = new Date(this.exit);
      const enterHour = new Date(this.entrance);
      const exitHourMilliS = exitHour.getTime();
      const enterHourMilliS = enterHour.getTime();
      console.log(exitHourMilliS, enterHourMilliS);
      if (!enterHour || !exitHour) throw new Error("Missing entrance or exit");
      const dailyhours: number = (exitHourMilliS - enterHourMilliS) / 3600000;
      console.log(dailyhours);
      return dailyhours;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

const hoursD: HoursDaily[] = [];

function renderRegisterUser(rootElement: HTMLElement | null) {
  try {
    const html = ` <div class="registers" id="register">
        <form class="register" onsubmit="handleRegisterUser(event)">
            <label for="firstName">First name</label>
            <input type="text" name="userName" id='firstName' placeholder="first name" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email" required>
            <input type="submit" value="Register">
        </form></div>`;

    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderLoggedUser(employee: Employee, rootElement: HTMLElement | null) {
  try {
    const html = ` <div class="LoggedUser" ><h2>Hello ${employee.userName}</h2>
    <form class="register" onsubmit="handleTimeClock(event)">
    <label for="firstName">First name</label>
    <input type="text" name="worker" id='firstName' placeholder="firstname" required>
    <label for="entrance">Entrance</label>
    <input type="datetime-local" name="entrance" id="entrance" required>
    <label for="exit">Exit</label>
    <input type="datetime-local" name="exit" id="exit" required>
    <input type="submit" value="Calculate">
</form>
    `;
    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleRegisterUser(ev: any) {
  try {
    ev.preventDefault();
    const userName = ev.target.userName.value;
    const email = ev.target.email.value;

    const employee = new Employee(userName, email);

    // Add to model
    employees.push(employee);

    // Control -> View
    renderLoggedUser(employee, document.querySelector("#calculate"));

    console.log(userName, email);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function handleTimeClock(ev: any) {
  try {
    ev.preventDefault();
    const worker = ev.target.worker.value;
    const entrance = ev.target.entrance.value;
    const exit = ev.target.exit.value;

    const timeClockEntry = new HoursDaily(worker, entrance, exit);

    // Add to model
    hoursD.push(timeClockEntry);

    // Control -> View
    renderTimeClockToHtml(hoursD, document.querySelector("#renderCalculate"));

    console.log(worker, entrance, exit);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function renderTimeClockToHtml(timeClockArr: HoursDaily[], rootElement: HTMLElement | null) {
  try {
    let html = `
      <table id="timeTable">
          <tr>
              <th>Worker</th>
              <th>Entrance</th>
              <th>Exit</th>
              <th>Total Hours</th>
          </tr>`;

    timeClockArr.forEach((element) => {
      console.log(element);
      const totalHours = element.calculateDailyHours();
      html += `
         <tr>
         <td>${element.worker}</td>
          <td>${element.entrance}</td>
          <td>${element.exit}</td>
          <td>${totalHours}</td>
         </tr>`;
    });

    html += `</table>`;

    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

renderRegisterUser(document.querySelector("#calculate"));


   
  
  

    

