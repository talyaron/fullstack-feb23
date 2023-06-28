// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
//Model
var Employee = /** @class */ (function () {
    function Employee(userName, email, workerhours) {
        this.userName = userName;
        this.email = email;
        this.workerhours = workerhours;
        this.id = uid();
    }
    return Employee;
}());
var Employees = [
    new Employee("nave", "vnavev@gmail.com", 2),
    new Employee("lior", "lior@gmail.com", 17)
];
var LogIn = /** @class */ (function () {
    function LogIn(employee, hour) {
        this.employee = employee;
        this.hour = hour;
        this.id = uid();
    }
    return LogIn;
}());
var logIns = [
    new LogIn(Employee.arguments, 12)
];
var LogOut = /** @class */ (function () {
    function LogOut(employee, hour) {
        this.employee = employee;
        this.hour = hour;
        {
            this.id = uid();
        }
    }
    return LogOut;
}());
var logOuts = [
    new LogOut(Employee.arguments, 14)
];
function calculateHoursWorked() {
    var hoursWorked = {}; // Object to store hours worked for each employee
    var _loop_1 = function (login) {
        var logout = logOuts.find(function (logout) { return logout.employee.id === login.employee.id; }); // Find the corresponding logout entry
        if (logout) {
            var hours = logout.hour - login.hour; // Calculate hours worked
            if (hoursWorked[login.employee.id]) {
                hoursWorked[login.employee.id] += hours; // Add hours worked to existing total for the employee
            }
            else {
                hoursWorked[login.employee.id] = hours; // Set hours worked for the employee
            }
        }
    };
    // Loop through each login and logout entry and calculate hours worked for each employee
    for (var _i = 0, logIns_1 = logIns; _i < logIns_1.length; _i++) {
        var login = logIns_1[_i];
        _loop_1(login);
    }
    return hoursWorked;
}
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
