//create unice ID
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var WorKer = /** @class */ (function () {
    function WorKer(fullName, workerNumber) {
        this.fullName = fullName;
        this.workerNumber = workerNumber;
    }
    return WorKer;
}());
var worKers = [];
worKers.push(new WorKer("Yuval Shtaingos", 1));
worKers.push(new WorKer("Adi Shetach", 2));
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
var WorkerHours = /** @class */ (function () {
    function WorkerHours(worker, hoursD, month) {
        this.worker = worker;
        this.hoursD = hoursD;
        this.month = month;
    }
    return WorkerHours;
}());
var workerHours = [];
function renderRegisterWorker(rootElement) {
    try {
        var html = "\n          <form onsubmit=\"handleRegisterWorker(event)\">\n          <h2>Register</h2>\n              <label for=\"fullName\">Full name</label>\n              <input type=\"text\" name=\"fullName\" id='fullName' placeholder=\"full Name\" required>\n              <label for=\"workerNumber\">Worker Number</label>\n              <input type=\"text\" name=\"workerNumber\" id='workerNumber' placeholder=\"Worker Number\" required>\n            \n        </select>\n              <input type=\"submit\" value=\"Register First Time\">\n          </form>";
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
        var workerNumber = ev.target.workerNumber.value;
        if (!fullName || !workerNumber)
            throw new Error("Couldnt find THE WORKER");
        var worker = new WorKer(fullName, workerNumber);
        //add to model
        worKers.push(worker);
        console.log(worKers);
    }
    catch (error) {
        console.error(error);
    }
}
function renderChooseWorker(rootElement) {
    try {
        var html = "\n          <form onsubmit=\"handleChooseWorker(event)\">\n          <h2>Worker</h2>\n          <label for=\"Worker\">Worker</label>\n          <input type=\"text\" name=\"Worker\" id=\"Worker\" placeholder=\"Your Full Name\" required>\n              \n              \n          </input>\n              <input type=\"submit\" value=\"Log-in\">\n          </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleChooseWorker(ev) {
    try {
        ev.preventDefault();
        var workerChosen_1 = ev.target.Worker.value;
        var workerLg = worKers.find(function (worker) {
            return String(worker.fullName) === String(workerChosen_1);
        });
        if (!workerLg) {
            alert('Employee NOt Exists');
            workerChosen_1 = null;
            throw new Error("Employee NOt Exists");
        }
        var rootWorkerChosen = document.querySelector("#greeting");
        if (rootWorkerChosen)
            rootWorkerChosen.innerHTML = "<h3>Hello " + workerChosen_1 + " please enter your working hours today.</h3>";
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
function handleRegisterhours(ev) {
    try {
        ev.preventDefault();
        var enterance = ev.target.enterance.value;
        var exit = new Date(ev.target.exit.value);
        if (!enterance || !exit)
            throw new Error("Missing Hours");
        var month = (exit.getMonth() + 1);
        console.log(month);
        var hoursDay = new HoursDaily(enterance, exit);
        hoursD.push(hoursDay);
        var dailyhours = hoursDay.calculateDailyHoures();
        var rootDailyhours = document.querySelector("#dailyhours");
        if (rootDailyhours)
            rootDailyhours.innerHTML = "<h1>You Worked Today: " + dailyhours + " hours</h1>";
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterWorker(document.querySelector("#register"));
renderChooseWorker(document.querySelector("#login"));
renderCalculateDailyHours(document.querySelector("#calculate"));
