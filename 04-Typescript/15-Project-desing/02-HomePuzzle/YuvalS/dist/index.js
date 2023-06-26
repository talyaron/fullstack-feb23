//create unice ID
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var WorKer = /** @class */ (function () {
    function WorKer(fullName) {
        this.fullName = fullName;
        this.id = uid();
    }
    return WorKer;
}());
var worKers = [];
var HoursDaily = /** @class */ (function () {
    function HoursDaily(enterance, exit) {
        this.enterance = enterance;
        this.exit = exit;
        this.id = uid();
    }
    HoursDaily.prototype.calculateDailyHoures = function () {
        try {
            var exitHour = new Date(this.exit);
            var enterHour = new Date(this.enterance);
            var exitHourMiliS = exitHour.getTime();
            var enterHourMiliS = enterHour.getTime();
            console.log(exitHourMiliS, enterHourMiliS);
            if (!enterHour || !exitHour)
                throw new Error("Missing enterance or exit");
            var dailyhours = ((exitHourMiliS - enterHourMiliS) / 3600000);
            console.log(dailyhours);
            return dailyhours;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return HoursDaily;
}());
var hoursD = [];
//     join classes
var WorkerHoursDaily = /** @class */ (function () {
    function WorkerHoursDaily(worker, hoursD) {
        this.worker = worker;
        this.hoursD = hoursD;
    }
    return WorkerHoursDaily;
}());
function renderRegisterWorker(rootElement) {
    try {
        var html = "\n          <form onsubmit=\"handleRegisterWorker(event)\">\n              <label for=\"fullname\">Full name</label>\n              <input type=\"text\" name=\"fullName\" id='fullName' placeholder=\"full name\" required>\n              <input type=\"submit\" value=\"Register\">\n          </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// view->model controlers
function handleRegisterWorker(ev) {
    try {
        ev.preventDefault();
        var fullName = ev.target.fullName.value;
        var worker = new WorKer(fullName);
        //add to model
        worKers.push(worker);
    }
    catch (error) {
        console.error(error);
    }
}
function handleRegisterhours(ev) {
    try {
        ev.preventDefault();
        var enterance = ev.target.enterance.value;
        var exit = ev.target.exit.value;
        if (!enterance || !exit)
            throw new Error("Missing Hours");
        var hoursDay = new HoursDaily(enterance, exit);
        hoursD.push(hoursDay);
        var dailyhours = hoursDay.calculateDailyHoures();
        var rootDailyhours = document.querySelector("#dailyhours");
        if (rootDailyhours)
            rootDailyhours.innerHTML = dailyhours;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCalculateDailyHours(rootElement) {
    try {
        var html = "\n      <form onsubmit=\"handleRegisterhours(event)\">\n      <label for=\"enterance\">enterance</label>\n      <input type=\"datetime-local\" name=\"enterance\" id=\"'enterance\" required>\n      <label for=\"exit\">exit</label>\n      <input type=\"datetime-local\" name=\"exit\" id=\"exit\" required>\n      <input type=\"submit\" value=\"Calculate\">\n  </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterWorker(document.querySelector("#register"));
renderCalculateDailyHours(document.querySelector("#calculate"));
