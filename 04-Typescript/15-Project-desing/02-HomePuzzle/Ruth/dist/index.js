//----------------Employee--------------
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = createID();
    }
    return Employee;
}());
var employees = [
    new Employee("Ruth", "BenTov"),
    new Employee("Amitai", "BenTov"),
];
//--------------Time-----------------
var Time = /** @class */ (function () {
    function Time(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
        //validate time is valid or default value = 0
        this.hours = hours < 24 && hours > 0 ? hours : 0;
        this.minutes = minutes < 60 && minutes > 0 ? minutes : 0;
    }
    Time.prototype.getTimeToString = function () {
        return this.hours + ":" + this.minutes;
    };
    return Time;
}());
//----------------TimeClock--------------
var TimeClock = /** @class */ (function () {
    function TimeClock(date, entranceTime, exitTime) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
        this.entranceTime = entranceTime;
        this.exitTime = exitTime;
    }
    TimeClock.prototype.getDate = function () {
        return this.date.getDate() + "/" + (this.date.getMonth() + 1);
    };
    TimeClock.prototype.getEntranceTime = function () {
        return this.entranceTime.hours + ":" + this.entranceTime.minutes;
    };
    TimeClock.prototype.getExitTime = function () {
        return this.exitTime.hours + ":" + this.exitTime.minutes;
    };
    TimeClock.prototype.getTotal = function () {
        var sumInMin = this.exitTime.hours * 60 + this.exitTime.minutes - (this.entranceTime.hours * 60 + this.entranceTime.minutes);
        return new Time((Math.floor(sumInMin / 60)), sumInMin % 60).getTimeToString();
    };
    return TimeClock;
}());
var emptyTimeClock = [];
var timesClock1 = [
    new TimeClock(new Date(), new Time(10, 45), new Time(17, 34)),
    new TimeClock(new Date(), new Time(9, 25), new Time(14, 14)),
    new TimeClock(new Date(), new Time(10, 45), new Time(15, 50))
];
//----------------UserHours---------------
var EmployeeHours = /** @class */ (function () {
    function EmployeeHours(employee, hoursWork) {
        this.employee = employee;
        this.hoursWork = hoursWork;
    }
    EmployeeHours.prototype.addingWorkingHours = function (workTime) {
        this.hoursWork.push(workTime);
    };
    EmployeeHours.prototype.addingArrayWorkingHours = function (workTime) {
        this.hoursWork = this.hoursWork.concat(workTime);
    };
    EmployeeHours.prototype.editEntranceTimeByDate = function (dateToEdit, newEntranceTime) {
        this.hoursWork.find(function (day) {
            day.date == dateToEdit;
        }).entranceTime = newEntranceTime;
    };
    EmployeeHours.prototype.getSumWorkingHours = function () {
        var sumImMin = 0;
        this.hoursWork.forEach(function (timeClock) {
            sumImMin +=
                timeClock.exitTime.hours * 60 + timeClock.exitTime.minutes - (timeClock.entranceTime.hours * 60 + timeClock.entranceTime.minutes);
        });
        return new Time((Math.floor(sumImMin / 60)), sumImMin % 60).getTimeToString();
    };
    return EmployeeHours;
}());
var employeesHours = [];
employees.forEach(function (employee) { return employeesHours.push(new EmployeeHours(employee, emptyTimeClock)); });
employeesHours[1].addingArrayWorkingHours(timesClock1);
//  render select employee
function renderSelectUser() {
    var userForm = document.querySelector("#userForm");
    userForm.innerHTML = "\n    <label for=\"selectUser\">select user:</label>\n    <select name=\"selectUser\" id=\"selectUser\" onchange=\"handleUser(event)\" required>\n    " + employeesHours
        .map(function (employee) {
        return "<option value=\"" + employee.employee.ID + "\">" + employee.employee.firstName + " " + employee.employee.lastName + "</option>";
    })
        .join("") + "\n          </select><br>\n          ";
}
//render Time Input in form---
function renderTimeInput() {
    var addTimeForm = document.querySelector("#addTimeForm");
    addTimeForm.innerHTML = "\n            <label for=\"date\">date:</label>\n            <input id=\"date\" type=\"date\" required>\n            <div class=\"timesInput\">\n            <div class=\"entranceInputLabel\">\n            <label for=\"entranceTime\">entrance:</label>\n            <input id=\"entranceTime\" type=\"time\" required>\n            </div>\n            <div class=\"leavingInputLabel\">\n            <label for=\"exitTime\">exit:</label>\n            <input id=\"exitTime\" type=\"time\" required>\n             </div>\n            </div>\n            <button type=\"submit\">ADD</button>\n            ";
}
//onclick on add button this function called. pay attention, it 2 function callback init
function addTimeToEmployee(event) {
    handleUser(event).addingWorkingHours(handleTime(event));
    renderTimeInput();
}
//handle select user--return an employee to submit function
function handleUser(event) {
    event.preventDefault();
    var chosenUserId = document.querySelector("#selectUser").value;
    var chosenEmployee = employeesHours.find(function (employee) { return employee.employee.ID === chosenUserId; });
    if (chosenEmployee) {
        return chosenEmployee;
    }
}
//handle selected Time--return time to submit function
function handleTime(event) {
    event.preventDefault();
    var entranceTime = document.querySelector("#entranceTime").value;
    var _a = entranceTime.split(":"), entranceHour = _a[0], entranceMin = _a[1];
    var exitTime = document.querySelector("#exitTime").value;
    var _b = exitTime.split(":"), exitHour = _b[0], exitMin = _b[1];
    var newTime = new TimeClock(new Date(document.querySelector("#date").value), new Time(parseInt(entranceHour), parseInt(entranceMin)), new Time(parseInt(exitHour), parseInt(exitMin)));
    return newTime;
}
function getEmployeeHours() {
    var employeeId = document.querySelector("#selectUser").value;
    console.log(employeesHours);
    var chosenEmployeeWork = employeesHours.find(function (empl) { return empl.employee.ID == employeeId; });
    var table = document.querySelector("#tableUser");
    table.innerHTML = "\n    <table>\n    <tr> <th>User Name</th> <th>Date</th> <th>Entrance</th> <th>Leaving</th> <th>Total</th></tr>\n       \n        " + chosenEmployeeWork.hoursWork.map(function (day) { return "<tr><td>" + chosenEmployeeWork.employee.firstName + " " + chosenEmployeeWork.employee.lastName + "</td><td>" + day.getDate() + "</td> <td>" + day.getEntranceTime() + "</td><td>" + day.getExitTime() + "</td><td>" + day.getTotal() + "</td></tr>"; }).join("") + "\n        <tr><td>ALL Hours</td><td>" + chosenEmployeeWork.getSumWorkingHours() + "</td></tr>\n    </table> ";
}
function getAllUserHours() {
    var table = document.querySelector("#tableUser");
    table.innerHTML = "<table> \n        <tr> <th>User Name</th> <th>Date</th> <th>Entrance</th> <th>Leaving</th> <th>Total</th></tr>\n        " + employeesHours.map(function (empl) { return empl.hoursWork.map(function (day) { return "<tr><td>" + empl.employee.firstName + " " + empl.employee.lastName + "</td><td>" + day.getDate() + "</td><td>" + day.getEntranceTime() + "</td><td>" + day.getExitTime() + "</td><td>" + day.getTotal() + "</td></tr>"; }).join(" "); }).join(" ") + "\n        " + employeesHours.map(function (empl) { return "<tr><td>" + empl.employee.firstName + " " + empl.employee.lastName + " Hours</td><td>" + empl.getSumWorkingHours() + "</td></tr>"; }) + "\n        </table>";
}
function addBtnNewUser() {
    var html = document.body;
    html.innerHTML += "\n  <button id=\"addNewUser\" onClick=\"newUserBtnClicked()\">new user</button>";
}
addBtnNewUser();
function newUserBtnClicked() {
    var newUserFirstName = prompt("first name:");
    var newUserLastName = prompt("last name:");
    var newEmployee = new EmployeeHours(new Employee(newUserFirstName, newUserLastName), emptyTimeClock);
    employeesHours.push(newEmployee);
    renderSelectUser();
    alert(newUserFirstName + " is add to User");
}
//create uniq id by Date, from google...
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
