var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
//Model
var Flight = /** @class */ (function () {
    function Flight(from, to) {
        this.from = from;
        this.to = to;
        this.id = uid();
    }
    Flight.prototype.calculateDistanceInKm = function () {
        try {
            var lat1 = this.from.lat;
            var lat2 = this.to.lat;
            var lon1 = this.from.lng;
            var lon2 = this.to.lng;
            if (!lat1 || !lat2 || !lon1 || !lon2)
                throw new Error("Missing lat or lng");
            var distance = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * 6371;
            return distance;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Flight;
}());
var flights = [];
var AirPort = /** @class */ (function () {
    function AirPort(name, lat, lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.id = uid();
    }
    return AirPort;
}());
var airports = [
    new AirPort("Tel-aviv", 32.0057, 34.885),
    new AirPort("Hithrow", 51.47, -0.454)
];
var Passanger = /** @class */ (function () {
    // flights:Flight[] = [];
    function Passanger(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = uid();
    }
    return Passanger;
}());
var passengers = [];
//join classes
var PassangerFlights = /** @class */ (function () {
    function PassangerFlights(passenger, flight) {
        this.passenger = passenger;
        this.flight = flight;
    }
    return PassangerFlights;
}());
var passengersFlights = [];
// view controlers
//register user
function renderRegisterUser(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handleRegisterUser(event)\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" name=\"lastName\" id=\"'lastName\" placeholder=\"last name\" required>\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" required>\n            <input type=\"submit\" value=\"Register\">\n        </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//calculate
renderRegisterUser(document.querySelector("#register"));
renderCalculateDistance(document.querySelector("#calculate"));
function renderLoggedUser(passenger, rootElement) {
    try {
        var html = "<h2>Hello " + passenger.firstName + "</h2>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// view->model controlers
function handleRegisterUser(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var email = ev.target.email.value;
        var passenger = new Passanger(firstName, lastName, email);
        //add to model
        passengers.push(passenger);
        //control->view 
        renderLoggedUser(passenger, document.querySelector("#register"));
        console.log(firstName, lastName, email);
    }
    catch (error) {
        console.error(error);
    }
}
function renderCalculateDistance(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handleCalculate(event)\">\n        <h2>From - to</h2>\n        <label for=\"from\">From</label>\n        <select name=\"from\" id=\"from\">\n            " + airports.map(function (airport) {
            return "<option value=\"" + airport.id + "\">" + airport.name + "</option>";
        }) + "\n            \n        </select>\n        <label for=\"to\">To</label>\n        <select name=\"to\" id=\"to\">\n        " + airports.map(function (airport) {
            return "<option value=\"" + airport.id + "\">" + airport.name + "</option>";
        }) + "\n        </select>\n        <input type=\"submit\" value=\"Calculate\">\n    </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleCalculate(ev) {
    try {
        ev.preventDefault();
        //get from airport 
        var airportIdFrom_1 = ev.target.from.value;
        //get to airport
        var airportIdTo_1 = ev.target.to.value;
        console.log(airportIdFrom_1, airportIdTo_1);
        var airportFrom = airports.find(function (airport) { return airport.id === airportIdFrom_1; });
        var airportTo = airports.find(function (airport) { return airport.id === airportIdTo_1; });
        if (!airportTo || !airportFrom)
            throw new Error("Couldnt find one of the airport");
        var flight = new Flight(airportFrom, airportTo);
        flights.push(flight);
        var distance = flight.calculateDistanceInKm();
        var rootDistance = document.querySelector("#distance");
        if (rootDistance)
            rootDistance.innerHTML = distance;
        console.log(distance);
    }
    catch (error) {
        console.error(error);
    }
}
