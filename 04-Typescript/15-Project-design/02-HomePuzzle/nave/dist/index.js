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
// Model
var Employee = /** @class */ (function () {
    function Employee(userName, email) {
        this.userName = userName;
        this.email = email;
        this.id = uid();
    }
    return Employee;
}());
var employees = [
    new Employee("nave", "vnavev@gmail.com"),
    new Employee("lior", "lior@gmail.com"),
];
var HoursDaily = /** @class */ (function () {
    function HoursDaily(worker, entrance, exit) {
        this.worker = worker;
        this.entrance = entrance;
        this.exit = exit;
        this.id = uid();
    }
    HoursDaily.prototype.calculateDailyHours = function () {
        try {
            var exitHour = new Date(this.exit);
            var enterHour = new Date(this.entrance);
            var exitHourMilliS = exitHour.getTime();
            var enterHourMilliS = enterHour.getTime();
            console.log(exitHourMilliS, enterHourMilliS);
            if (!enterHour || !exitHour)
                throw new Error("Missing entrance or exit");
            var dailyhours = (exitHourMilliS - enterHourMilliS) / 3600000;
            console.log(dailyhours);
            return dailyhours;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return HoursDaily;
}());
var hoursD = [];
function renderRegisterUser(rootElement) {
    try {
        var html = " <div class=\"registers\" id=\"register\">\n        <form class=\"register\" onsubmit=\"handleRegisterUser(event)\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" name=\"userName\" id='firstName' placeholder=\"first name\" required>\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"email\" required>\n            <input type=\"submit\" value=\"Register\">\n        </form></div>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderLoggedUser(employee, rootElement) {
    try {
        var html = " <div class=\"LoggedUser\" ><h2>Hello " + employee.userName + "</h2>\n    <form class=\"register\" onsubmit=\"handleTimeClock(event)\">\n    <label for=\"firstName\">First name</label>\n    <input type=\"text\" name=\"worker\" id='firstName' placeholder=\"firstname\" required>\n    <label for=\"entrance\">Entrance</label>\n    <input type=\"datetime-local\" name=\"entrance\" id=\"entrance\" required>\n    <label for=\"exit\">Exit</label>\n    <input type=\"datetime-local\" name=\"exit\" id=\"exit\" required>\n    <input type=\"submit\" value=\"Calculate\">\n</form>\n    ";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleRegisterUser(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.userName.value;
        var email = ev.target.email.value;
        var employee = new Employee(userName, email);
        // Add to model
        employees.push(employee);
        // Control -> View
        renderLoggedUser(employee, document.querySelector("#calculate"));
        console.log(userName, email);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handleTimeClock(ev) {
    try {
        ev.preventDefault();
        var worker = ev.target.worker.value;
        var entrance = ev.target.entrance.value;
        var exit = ev.target.exit.value;
        var timeClockEntry = new HoursDaily(worker, entrance, exit);
        // Add to model
        hoursD.push(timeClockEntry);
        // Control -> View
        renderTimeClockToHtml(hoursD, document.querySelector("#renderCalculate"));
        console.log(worker, entrance, exit);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function renderTimeClockToHtml(timeClockArr, rootElement) {
    try {
        var html_1 = "\n      <table id=\"timeTable\">\n          <tr>\n              <th>Worker</th>\n              <th>Entrance</th>\n              <th>Exit</th>\n              <th>Total Hours</th>\n          </tr>";
        timeClockArr.forEach(function (element) {
            console.log(element);
            var totalHours = element.calculateDailyHours();
            html_1 += "\n         <tr>\n         <td>" + element.worker + "</td>\n          <td>" + element.entrance + "</td>\n          <td>" + element.exit + "</td>\n          <td>" + totalHours + "</td>\n         </tr>";
        });
        html_1 += "</table>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterUser(document.querySelector("#calculate"));
