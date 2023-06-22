//MODEL
var Employee = /** @class */ (function () {
    function Employee(employeeID, firsName, lastName) {
        this.employeeID = employeeID;
        this.firsName = firsName;
        this.lastName = lastName;
    }
    return Employee;
}());
var employees = [];
employees.push(new Employee(20156, "shiran", "lasry"));
employees.push(new Employee(20123, "david", "levy"));
console.log(employees);
var TimeClock = /** @class */ (function () {
    function TimeClock(employee, status, enterTime, exitTime) {
        this.employee = employee;
        this.status = status;
        this.enterTime = enterTime;
        this.exitTime = exitTime;
    }
    TimeClock.prototype.calkWorkTime = function () {
        try {
            var millisecondsPerHour = 1000 * 60 * 60; // Number of milliseconds in an hour
            var enterTimestamp = this.enterTime.getTime(); // Get the enter time as a timestamp
            var exitTimestamp = this.exitTime.getTime(); // Get the exit time as a timestamp
            if (enterTimestamp > exitTimestamp) {
                throw new Error("Invalid time range: enter time cannot be after exit time.");
            }
            var workTimeMilliseconds = exitTimestamp - enterTimestamp;
            var workTimeHours = workTimeMilliseconds / millisecondsPerHour;
            return workTimeHours;
        }
        catch (error) {
            console.error(error);
        }
    };
    return TimeClock;
}());
var employeesTimeClock = [];
// view CONTROLERS
var LogINDiv = document.querySelector("#LogIN");
var AddNewWorkerDiv = document.querySelector("#AddNewWorker");
var clockiDiv = document.querySelector("#clocki");
function renderEmployeeLogIN(rootElement) {
    try {
        var html = " <form onsubmit=\"handleLogIN(event)\">\n        <label for=\"employeeID\">ID: </label>\n        <input type=\"text\" name=\"employeeID\" id='employeeID' placeholder=\"ENERT ID\" required>\n        <input type=\"submit\" value=\"ENTER\">\n    </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderClock(rootElement) {
    try {
        var html = "<form>\n        <button type=\"button\" onclick=\"saveDateTime('enter'," + setionID + ")\">Enter</button>\n        <button type=\"button\" onclick=\"saveDateTime('exit'," + setionID + ")\">Exit</button>\n      </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var setionID;
function handleLogIN(event) {
    event.preventDefault();
    setionID = event.target.employeeID.value;
    var employeeLG = employees.find(function (employee) {
        return Number(employee.employeeID) === Number(setionID);
    });
    if (!employeeLG) {
        throw new Error("Employee NOt Exists");
    }
    renderClock(clockiDiv);
    if (LogINDiv) {
        LogINDiv.innerHTML = ""; // Remove all HTML content
    }
    if (AddNewWorkerDiv) {
        AddNewWorkerDiv.innerHTML = ""; // Remove all HTML content
    }
}
function saveDateTime(action, id) {
    var currentDateTime = new Date();
    var dateTime = currentDateTime.toLocaleString();
    if (action === 'enter') {
        var time = localStorage.setItem('enterDateTime', dateTime);
        var emploeeyclockbyID = employeesTimeClock.find(function (emploeeyclock) { return emploeeyclock.employee.employeeID === id; });
        if (setionID) {
            setionEmployee =
            ;
            var newtimeclock = new TimeClock(setionID, true, currentDateTime, null);
            employeesTimeClock.push(newtimeclock);
            alert('Enter date and time saved: ' + dateTime);
        }
    }
    else if (action === 'exit') {
        localStorage.setItem('exitDateTime', dateTime);
        alert('Exit date and time saved: ' + dateTime);
    }
}
renderEmployeeLogIN(LogINDiv);
