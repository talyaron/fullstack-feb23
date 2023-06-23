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
    EmployeeHours.prototype.editEntranceTimeByDate = function (dateToEdit, newEntranceTime) {
        this.hoursWork.find(function (day) {
            day.date == dateToEdit;
        }).entranceTime = newEntranceTime;
    };
    EmployeeHours.prototype.getSumWorkingHours = function () {
        var sumImMin = 0;
        this.hoursWork.forEach(function (timeClock) {
            sumImMin +=
                timeClock.exitTime.hours * 60 +
                    timeClock.exitTime.minutes -
                    (timeClock.entranceTime.hours * 60 + timeClock.entranceTime.minutes);
        });
        return new Time(Math.floor(sumImMin / 60), sumImMin % 60);
    };
    return EmployeeHours;
}());
var employeesHour = [];
employees.forEach(function (employee) { return employeesHour.push(new EmployeeHours(employee, emptyTimeClock)); });
//  render select employee
function renderSelectUser() {
    var selectDivForm = document.querySelector("#addTimeToUserForm");
    selectDivForm.innerHTML = "\n    <label for=\"selectUser\">select user:</label>\n    <select name=\"selectUser\" id=\"selectUser\" onchange=\"handleUser(event)\" required>\n    " + employees
        .map(function (employee) {
        return "<option value=\"" + employee.ID + "\">" + employee.firstName + " " + employee.lastName + "</option>";
    })
        .join("") + "\n        </select>\n        ";
}
//handle select user--
function handleUser(event) {
    event.preventDefault();
    var chosenUserId = event.target.value;
    var chosenEmployee = employees.find(function (employee) { return employee.ID === chosenUserId; });
    var chosenEmployeeWork = employeesHour.find(function (empl) { empl.employee == chosenEmployee; });
    if (chosenEmployeeWork) {
        return chosenEmployeeWork;
    }
}
function renderTimeInput() {
    var addTimeForm = document.querySelector("#addTimeToUserForm");
    addTimeForm.innerHTML += "\n    <label for=\"date\">date:</label>\n    <input id=\"date\" type=\"date\" required>\n    <label for=\"entranceTime\">entrance time:</label>\n    <input id=\"entranceTime\" type=\"time\" required>\n    <label for=\"exitTime\">exit time:</label>\n    <input id=\"exitTime\" type=\"time\" required>\n    <button type=\"submit\">ADD</button>\n\n    ";
}
function addTimeToEmployee(event) {
    handleUser(event).addingWorkingHours(handleTime(event));
}
function handleTime(event) {
    event.preventDefault();
    var entranceTime = document.querySelector("#entranceTime").value;
    var _a = entranceTime.split(":"), entranceHour = _a[0], entranceMin = _a[1];
    var exitTime = document.querySelector("#exitTime").value;
    var _b = entranceTime.split(":"), exitHour = _b[0], exitMin = _b[1];
    var newTime = new TimeClock(new Date(document.querySelector("#date").value), new Time(parseInt(entranceHour), parseInt(entranceMin)), new Time(parseInt(exitHour), parseInt(exitMin)));
    return newTime;
}
//create uniq id by Date, from google...
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
//render input boxes after chosen employee.!!
//handle input time and connect with employee that chosen by id . in 2 function
//function 1 : called when you chose employee
//
