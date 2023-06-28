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
var worKers = [
    new WorKer("Yuval Shtaingos"),
    new WorKer("Adi Shetach"),
];
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
// class WorkerHoursDaily {
//     constructor(public worker: WorKer, public hoursD: HoursDaily) {}
//     calculateMonthlyHoures(): number| undefined{
//         try {
//             let monthTotal:number = 0;
//             for (let i = 0; i < hoursD.length; i++) {
//             monthTotal += hoursD[i];
//         }
//         } catch (error) {
//             console.error(error);
//             return undefined;  
//         }
//     }
// }
// const workerHours: WorkerHoursDaily[] = [];
function renderRegisterWorker(rootElement) {
    try {
        var html = "\n          <form onsubmit=\"handleRegisterWorker(event)\">\n              <label for=\"fullName\">Full name</label>\n              <select name=\"fullName\" id=\"fullName\">\n            " + worKers.map(function (worker) {
            return "<option value=\"" + worker.id + "\">" + worker.fullName + "</option>";
        }) + "\n            \n        </select>\n              <input type=\"submit\" value=\"Register\">\n          </form>";
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
        var fullNameID_1 = ev.target.fullName.value;
        var fullName = worKers.find(function (worker) { return worker.id === fullNameID_1; });
        if (!fullName || !fullNameID_1)
            throw new Error("Couldnt find THE WORKER");
        var worker = new WorKer(fullName);
        //add to model
        worKers.push(worker);
        console.log(worKers);
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
            rootDailyhours.innerHTML = "<h1>You Worked Today: " + dailyhours + " hours</h1>";
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
