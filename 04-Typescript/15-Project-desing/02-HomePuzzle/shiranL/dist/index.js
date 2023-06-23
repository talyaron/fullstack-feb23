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
            if (!this.exitTime || !this.enterTime)
                throw new Error("missing enter or exit");
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
function renderAddEmployee(rootElement) {
    try {
        var html = "<form onsubmit=\"handAddEmployee(event)\">\n        <label for=\"firstName\">First Name: </label>\n        <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"First Name:\" required>\n        <label for=\"lastName\">Last Name: </label>\n        <input type=\"text\" name=\"lastName\" id='lastName' placeholder=\"Last Name:\" required>\n        <label for=\"newId\">ID: </label>\n        <input type=\"number\" name=\"newId\" id='newId' placeholder=\"ID:\" required>\n        <input type=\"submit\" value=\"ADD\">\n    </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handAddEmployee(event) {
    try {
        event.preventDefault();
        var firstName = event.target.firstName.value;
        var lastName = event.target.lastName.value;
        var id_1 = event.target.newId.valueAsNumber;
        if (!firstName || !lastName || !id_1)
            throw new Error("invalid data");
        var newEmployee = new Employee(id_1, firstName, lastName);
        var employeeExists = employees.find(function (employee) { return employee.employeeID === id_1; });
        if (employeeExists) {
            alert('Employee exists!');
        }
        else {
            employees.push(newEmployee);
            alert('Add Employee sucsess!');
            console.log(employees);
        }
        if (AddNewWorkerDiv) {
            AddNewWorkerDiv.innerHTML = ""; // Remove all HTML content
        }
        renderEmployeeLogIN(LogINDiv);
        renderAddEmployee(AddNewWorkerDiv);
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
        if (setionID) {
            var emploeeybyID = employees.find(function (emploeey) { return emploeey.employeeID === id; });
            if (!emploeeybyID)
                throw new Error("cant find Employee with id " + id);
            var checkStatus = employeesTimeClock.find(function (employeeTime) { return employeeTime.employee.employeeID === id &&
                employeeTime.status == true; });
            if (checkStatus)
                alert('Need To Exit First ');
            else {
                if (!emploeeybyID)
                    throw new Error("cant find Employee with id " + id);
                var newtimeclock = new TimeClock(emploeeybyID, true, currentDateTime, null);
                employeesTimeClock.push(newtimeclock);
                alert('Enter date and time saved: ' + dateTime);
                setionID = null;
            }
            if (clockiDiv) {
                clockiDiv.innerHTML = ""; // Remove all HTML content
            }
            renderEmployeeLogIN(LogINDiv);
            renderAddEmployee(AddNewWorkerDiv);
        }
    }
    else if (action === 'exit') {
        console.log(employeesTimeClock);
        var employeeIndex = employeesTimeClock.findIndex(function (employeeTime) {
            return employeeTime.employee.employeeID === Number(id) && employeeTime.status == true;
        });
        if (employeeIndex == -1) {
            alert('Enter  time not declare:');
        }
        else {
            employeesTimeClock[employeeIndex].exitTime = currentDateTime;
            employeesTimeClock[employeeIndex].status = false;
            console.log(employeesTimeClock);
            alert('Exit date and time saved: ' + dateTime);
        }
        if (clockiDiv) {
            clockiDiv.innerHTML = ""; // Remove all HTML content
        }
        renderEmployeeLogIN(LogINDiv);
        renderAddEmployee(AddNewWorkerDiv);
    }
}
renderEmployeeLogIN(LogINDiv);
renderAddEmployee(AddNewWorkerDiv);
