//בניית הטבלה
var tableMain = document.createElement("table"); // Create table element
var headerRow = document.createElement("tr"); // Create table header row
var headers = ["Entry Time", "Exit Time", "Hours Worked"]; // Create table header cells
for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
    var headerText = headers_1[_i];
    var headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
}
tableMain.appendChild(headerRow); // Append the header row to the table
var dataRow = document.createElement("tr"); // Create data row
for (var i = 0; i < headers.length; i++) { // Create empty data cells
    var dataCell = document.createElement("td");
    dataRow.appendChild(dataCell);
}
tableMain.appendChild(dataRow);
document.body.appendChild(tableMain);
// יצירת הקלאס ושעות הכניסה והיציאה
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
// const table1 = document.querySelector("table") as HTMLTableElement;
entryTimeButton.addEventListener("click", function () {
    timeClock.entryTime = new Date();
    tableMain.rows[1].cells[0].innerHTML = timeClock.entryTime.toLocaleString();
});
exitTimeButton.addEventListener("click", function () {
    var _a;
    timeClock.exitTime = new Date();
    tableMain.rows[1].cells[1].innerHTML = timeClock.exitTime.toLocaleString();
    tableMain.rows[1].cells[2].innerHTML = (_a = timeClock.getHoursWorked()) === null || _a === void 0 ? void 0 : _a.toFixed(2);
});
