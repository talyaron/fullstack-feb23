//----------------Employee--------------
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = createID();
    }
    return Employee;
}());
var employees = [new Employee("Ruth", "BenTov"), new Employee("Amitai", "BenTov")];
//--------------Time-----------------
var Time = /** @class */ (function () {
    function Time(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
        //validate time is valid or default value = 0
        this.hours = (hours < 24 && hours > 0) ? hours : 0;
        this.minutes = (minutes < 60 && minutes > 0) ? minutes : 0;
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
var timesClock = [
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
        this.hoursWork.find(function (day) { day.date == dateToEdit; }).entranceTime = newEntranceTime;
    };
    EmployeeHours.prototype.getSumWorkingHours = function () {
        var sumImMin = 0;
        this.hoursWork.forEach(function (timeClock) {
            sumImMin += (timeClock.exitTime.hours * 60 + timeClock.exitTime.minutes) - (timeClock.entranceTime.hours * 60 + timeClock.entranceTime.minutes);
        });
        return (new Time(Math.floor(sumImMin / 60), sumImMin % 60));
    };
    return EmployeeHours;
}());
//create uniq id by Date, from google...
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
