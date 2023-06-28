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

//Model
class Employee {
  id: string;
  constructor(public userName: string, public email: string, public  workerhours: number ) {
    this.id = uid();
  }}

const Employees: Employee[] = [
    new Employee("nave", "vnavev@gmail.com", 2),
    new Employee("lior",  "lior@gmail.com", 17)
];


class LogIn{
  id:string;
  constructor(public employee:Employee, public hour:number){
this.id = uid();
}}

const logIns: LogIn[] = [
  new LogIn(Employee.arguments, 12)
];
class LogOut{
  id:string;
  constructor(public employee:Employee, public hour:number){{
this.id = uid();
}}}
const logOuts: LogOut[] = [
  new LogOut (Employee.arguments, 14)
];

function calculateHoursWorked() {
  const hoursWorked: { [key: string]: number } = {}; // Object to store hours worked for each employee

  // Loop through each login and logout entry and calculate hours worked for each employee
  for (const login of logIns) {
    const logout = logOuts.find(logout => logout.employee.id === login.employee.id); // Find the corresponding logout entry
    if (logout) {
      const hours = logout.hour - login.hour; // Calculate hours worked
      if (hoursWorked[login.employee.id]) {
        hoursWorked[login.employee.id] += hours; // Add hours worked to existing total for the employee
      } else {
        hoursWorked[login.employee.id] = hours; // Set hours worked for the employee
      }
    }
  }

  return hoursWorked;
}





class Passanger {
  id: string;
  // flights:Flight[] = [];
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string
  ) {
    this.id = uid();
  }
}


//join classes

class PassangerFlights {
  constructor(public passenger: Passanger, public flight: Flight) {}
}

const passengersFlights: PassangerFlights[] = [];

// view controlers
//register user
function renderRegisterUser(rootElement: HTMLElement | null) {
  try {
    const html = `
        <form onsubmit="handleRegisterUser(event)">
            <label for="firstName">First name</label>
            <input type="text" name="firstName" id='firstName' placeholder="first name" required>
            <label for="lastName">Last name</label>
            <input type="text" name="lastName" id="'lastName" placeholder="last name" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <input type="submit" value="Register">
        </form>`;

    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

//calculate

renderRegisterUser(document.querySelector("#register"));
renderCalculateDistance(document.querySelector("#calculate"));

function renderLoggedUser(
  passenger: Passanger,
  rootElement: HTMLElement | null
) {
  try {
    const html = `<h2>Hello ${passenger.firstName}</h2>`;
    if (!rootElement) throw new Error("no root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

// view->model controlers
function handleRegisterUser(ev: any) {
  try {
    ev.preventDefault();
    const firstName = ev.target.firstName.value;
    const lastName = ev.target.lastName.value;
    const email = ev.target.email.value;

    const passenger = new Passanger(firstName, lastName, email);

    //add to model
    passengers.push(passenger);

    //control->view
    renderLoggedUser(passenger, document.querySelector("#register"));

    console.log(firstName, lastName, email);
  } catch (error) {
    console.error(error);
  }
}

function renderCalculateDistance(rootElement: HTMLElement | null) {
  try {
    const html = `
        <form onsubmit="handleCalculate(event)">
        <h2>From - to</h2>
        <label for="from">From</label>
        <select name="from" id="from">
            ${airports.map((airport) => {
              return `<option value="${airport.id}">${airport.name}</option>`;
            })}
            
        </select>
        <label for="to">To</label>
        <select name="to" id="to">
        ${airports.map((airport) => {
          return `<option value="${airport.id}">${airport.name}</option>`;
        })}
        </select>
        <input type="submit" value="Calculate">
    </form>`;

    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleCalculate(ev: any) {
  try {
    ev.preventDefault();

    //get from airport
    const airportIdFrom = ev.target.from.value;

    //get to airport
    const airportIdTo = ev.target.to.value;

    console.log(airportIdFrom, airportIdTo);

    const airportFrom = airports.find(
      (airport) => airport.id === airportIdFrom
    );
    const airportTo = airports.find((airport) => airport.id === airportIdTo);
    if (!airportTo || !airportFrom)
      throw new Error("Couldnt find one of the airport");

    const flight = new Flight(airportFrom, airportTo);

    flights.push(flight);
    const distance = flight.calculateDistanceInKm();
    const rootDistance: any = document.querySelector("#distance");
    if (rootDistance) rootDistance.innerHTML = distance;
    console.log(distance);
  } catch (error) {
    console.error(error);
  }
}
