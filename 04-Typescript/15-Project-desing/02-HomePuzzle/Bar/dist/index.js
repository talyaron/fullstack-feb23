// # Goal: #
// Work Time clock.
// every workerr, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table.
var id = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
// workers.
var Workerr = /** @class */ (function () {
    function Workerr(name, email) {
        this.name = name;
        this.email = email;
        this.id = id();
    }
    return Workerr;
}());
var workers = [];
// entrance and exit times.
var Movment = /** @class */ (function () {
    function Movment(entrance, exit, dayliHours) {
        this.entrance = entrance;
        this.exit = exit;
        this.dayliHours = dayliHours;
        this.id = id();
    }
    return Movment;
}());
var movments = [];
//join classes
var MovmentWorkerr = /** @class */ (function () {
    function MovmentWorkerr(workerr, movment) {
        this.workerr = workerr;
        this.movment = movment;
    }
    return MovmentWorkerr;
}());
var movmentWorkers = [];
// view controlers
// register user
function renderRegisterWorkerr(rootElement) {
    try {
        if (!rootElement)
            throw new Error("Missing root element");
        var html = "\n        <div class=\"register\">\n        <form onsubmit=\"handleRegisterWorkerr(event)\">\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\" required>\n          <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\" required>\n          \n          <label for=\"entrance\">entrance</label>\n          <input type=\"time\" name=\"entrance\" id=\"entrance\" required>\n          <label for=\"exit\">exit</label>\n          <input type=\"time\" name=\"exit\" id=\"exit\" required>\n\n          <input type=\"submit\" value=\"register\">\n        </form>\n        </div>";
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterWorkerr(document.querySelector("#register"));
function renderMovmentWorkerr(workerr, movment, rootElement) {
    try {
        var html = "\n        <div class=\"workwrDitels\">\n            <h2>" + workerr.name + "</h2>\n            <div class=\"ditels\">\n              <p> Entrance time is: " + movment.entrance + "</p>\n              <p> Exit time is: " + movment.exit + "</p>\n                <p> Dayli hours is: " + movment.dayliHours + "</p>\n            </div>\n        </div>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// view->model controlers
function handleRegisterWorkerr(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        var workerr = new Workerr(name, email);
        //add to model
        workers.push(workerr);
        var entrance = ev.target.elements.entrance.value;
        var exit = ev.target.elements.exit.value;
        var dayliHours = function () {
            var entrance = parseFloat(ev.target.elements.entrance.value);
            var exit = parseFloat(ev.target.elements.exit.value);
            var dailyHours = exit - entrance;
            return dailyHours;
        };
        var movment = new Movment(entrance, exit, dayliHours());
        //add to model
        movments.push(movment);
        renderMovmentWorkerr(workerr, movment, document.querySelector("#MovmentWorker"));
        console.log(name, email, entrance, exit, dayliHours());
    }
    catch (error) {
        console.error(error);
    }
}
// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for workerr, and show each workerr total times.
//    the user could edit entrance details.
