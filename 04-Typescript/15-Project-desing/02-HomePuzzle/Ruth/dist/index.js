//----------------Employee--------------
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = createID();
    }
    return Employee;
}());
//--------------Time-----------------
var Time = /** @class */ (function () {
    function Time(hours, minutes) {
        this.hours = hours;
    }
    return Time;
}());
//----------------TimeClock--------------
var TimeClock = /** @class */ (function () {
    function TimeClock(date, entranceTime, exitTime) {
        this.date = date;
        this.entranceTime = entranceTime;
        this.exitTime = exitTime;
    }
    return TimeClock;
}());
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
        this.hoursWork.find(function (day) { day.date == dateToEdit; }).entranceTime = newEntranceTime;
    };
    return EmployeeHours;
}());
//create uniq id by Date, from google...
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
