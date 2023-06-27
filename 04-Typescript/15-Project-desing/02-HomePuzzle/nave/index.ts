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
class WorkLog {
  id: string;
  constructor(public userName: string, public email: string, public login: da, public hours: number ) {
    this.id = uid();
  }}

const workersHours: WorkLog[] = [
    new WorkLog("nave", 21\05\2023 : , 12,20),
    new WorkLog("lior",  12, 17,5)
];
function currentTime() {
  let date = new Date(); 
  let hh:number|string = date.getHours();
  let mm:number|string  = date.getMinutes();
  let ss:number|string  = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

  calculateHours(): number | undefined {
    try {
      const user = this.userName;
      const logIn = this.logIn;
      const logOut = this.logOut;
      const hours = this.hours;
      if (!user || !logIn || !logOut )
        throw new Error("Missing lat or lng");

      const calculateHours =
        logIn+logOut 
      return distance;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }


const flights: Flight[] = [];

class AirPort {
  id: string;
  constructor(public name: string, public lat: number, public lng: number) {
    this.id = uid();
  }
}

const airports: AirPort[] = [
  new AirPort("Tel-aviv", 32.0057, 34.885),
  new AirPort("Hithrow", 51.47, -0.454),
];

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

const passengers: Passanger[] = [];

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
