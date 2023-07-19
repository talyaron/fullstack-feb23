// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var workers = /** @class */ (function () {
    function workers(name) {
        this.name = name;
        this.id = uid();
    }
    return workers;
}());
var workerss = [
    new workers("Ran yamin"),
    new workers("lionel messi")
];
var Clock = /** @class */ (function () {
    function Clock(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    return Clock;
}());
var EntExt = /** @class */ (function () {
    function EntExt(Ent, Ext) {
        this.Ent = Ent;
        this.Ext = Ext;
    }
    return EntExt;
}());
var EntExtt = [];
function renderWorkerUser(rootElement) {
    var html = "\n        <form onsubmit=\"handleRegisterWorker(event)\">\n        <h2>Please enter your full name </h2>\n        <select name=\"name\" id=\"name\">\n        " + workerss.map(function (work) {
        return "<option value=\"" + work.id + "\">" + work.name + "</option>";
    }) + " \n       </select>  \n      </form>";
    rootElement.innerHTML = html;
}
renderWorkerUser(document.querySelector("#worker"));
