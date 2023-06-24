var TimeClock = /** @class */ (function () {
    function TimeClock(entryTime, exitTime) {
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.entryTime = null;
        this.exitTime = null;
    }
    TimeClock.prototype.getHoursWorked = function () {
        if (this.entryTime && this.exitTime) {
            return (this.exitTime.getTime() - this.entryTime.getTime()) / 360000;
        }
        else {
            return null;
        }
    };
    return TimeClock;
}());
var timeClock = new TimeClock(null, null);
var entryTimeButton = document.querySelector("#entry-time");
var exitTimeButton = document.querySelector("#exit-time");
var table = document.querySelector("table");
entryTimeButton.addEventListener("click", function () {
    timeClock.entryTime = new Date();
    table.rows[1].cells[0].innerHTML = timeClock.entryTime.toLocaleString();
});
exitTimeButton.addEventListener("click", function () {
    var _a;
    timeClock.exitTime = new Date();
    table.rows[1].cells[1].innerHTML = timeClock.exitTime.toLocaleString();
    table.rows[1].cells[2].innerHTML = (_a = timeClock.getHoursWorked()) === null || _a === void 0 ? void 0 : _a.toFixed(2);
});
