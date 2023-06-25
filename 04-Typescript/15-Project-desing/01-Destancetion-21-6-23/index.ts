const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

//Model
class Flight {
  //from
  //to
  id: string;
  constructor(public from: AirPort, public to: AirPort) {
    this.id = uid();
  }

  calculateDistanceInKm(): number | undefined {
    try {
      const lat1 = this.from.lat;
      const lat2 = this.to.lat;
      const lon1 = this.from.lng;
      const lon2 = this.to.lng;
      if (!lat1 || !lat2 || !lon1 || !lon2)
        throw new Error("Missing lat or lng");

      const distance =
        Math.acos(
          Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)
        ) * 6371;
      return distance;
    } catch (error) {
      console.error(error);
      return undefined;
    }
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
