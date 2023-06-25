var WorkLog = /** @class */ (function () {
    function WorkLog(workerName, hours) {
        this.workerName = workerName;
        this.hours = hours;
    }
    return WorkLog;
}());
var workers = [];
var workersHours = [
    new WorkLog("Doriel", 8),
    new WorkLog("Max", 12)
];
function renderWorkersHours(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handleRegisterWorker(event)\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n            <label for=\"hours\">Last name</label>\n            <input type=\"number\" name=\"hours\" id=\"'hours\" placeholder=\"hours\" required>\n            <input type=\"submit\" value=\"Register\">\n        </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderWorkersHours(document.querySelector("#WorkersHours"));
function renderLoggedWorker(workers, rootElement) {
    try {
        var html = "<h2>Hello " + workers.workerName + " you worked for " + workers.hours + " hours today</h2>";
        if (!rootElement)
            throw new Error("no root element");
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
        var firstName = ev.target.firstName.value;
        var hours = ev.target.hours.value;
        var newWorker = new WorkLog(firstName, hours);
        //add to model
        workers.push(newWorker);
        //control->view 
        renderLoggedWorker(newWorker, document.querySelector("#WorkersHours"));
        console.log(firstName, hours);
    }
    catch (error) {
        console.error(error);
    }
}
