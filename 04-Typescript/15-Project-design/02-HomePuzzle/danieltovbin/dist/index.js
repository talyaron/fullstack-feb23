// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// Model
// Entities : Hour
var Hour = /** @class */ (function () {
    function Hour(entrance, exit) {
        this.entrance = entrance;
        this.exit = exit;
        var entranceTime = this.convertTimeStringToMinutes(entrance);
        var exitime = this.convertTimeStringToMinutes(exit);
        var sumHours = exitime - entranceTime;
        this.id = this.convertMinutesToTimeString(sumHours);
    }
    Hour.prototype.convertTimeStringToMinutes = function (timeString) {
        var _a = timeString.split(':'), hours = _a[0], minutes = _a[1];
        var totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
    };
    Hour.prototype.convertMinutesToTimeString = function (minutes) {
        var hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        var mins = (minutes % 60).toString().padStart(2, "0");
        return hours + ":" + mins;
    };
    return Hour;
}());
var hoursArray = new Array;
function handleClockTime(rootElement) {
    try {
        var html = "\n        <div class=\"wrapper\">\n            <form onsubmit=\"handleClockSubmit(event)\">\n                <label for=\"entrance\">Entrance time</label>\n                <input type=\"text\" name=\"entrance\" id=\"entrance\" placeholder=\"Entrance time\">\n                <label for=\"exit\">Exit time</label>\n                <input type=\"text\" name=\"exit\" id=\"exit\" placeholder=\"Exit time\">\n                <button type=\"sumbit\">Send</button>\n            </form>\n        </div>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
handleClockTime(document.querySelector('#time'));
function renderTotalHours(totalHours) {
    try {
        var totalHoursElement = document.querySelector("#total-hours");
        if (!totalHours)
            throw new Error('No event found');
        totalHoursElement.innerHTML = "<h2><b>Total hours worked: " + totalHours + "</b></h2>";
    }
    catch (error) {
        console.error(error);
    }
}
function handleClockSubmit(ev) {
    ev.preventDefault();
    var numEntrance = ev.target.entrance.value;
    var numExit = ev.target.exit.value;
    var hour = new Hour(numEntrance, numExit);
    hoursArray.push(hour);
    var totalHoursWorked = hoursArray.reduce(function (total, hour) { return total + parseInt(hour.id); }, 0);
    renderTotalHours(totalHoursWorked);
}
