//----------------User--------------
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ID = createID();
    }
    return User;
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
var UserHours = /** @class */ (function () {
    function UserHours(user, hoursWork) {
        this.user = user;
        this.hoursWork = hoursWork;
    }
    UserHours.prototype.addingWorkingHours = function (workTime) {
        this.hoursWork.push(workTime);
    };
    return UserHours;
}());
//create uniq id by Date, from google...
function createID() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
}
