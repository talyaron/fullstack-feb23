//model
//worker personal details
//time clock
var TimeClock = /** @class */ (function () {
    //entart time
    //exit time
    function TimeClock(entaryTime, exitTime) {
        this.entaryTime = entaryTime;
        this.exitTime = exitTime;
    }
    return TimeClock;
}());
var Employ = /** @class */ (function () {
    function Employ(firstName, lastName, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
    }
    return Employ;
}());
var workers = [];
//join classes
var WorkerTimeClock = /** @class */ (function () {
    function WorkerTimeClock(worker, timeClock) {
        this.worker = worker;
        this.timeClock = timeClock;
    }
    return WorkerTimeClock;
}());
var workerTimes = [];
//view controlers
//worker info
function renderHandleWorker(rootElement) {
    console.dir(rootElement);
    try {
        var html = "\n            <form onsubmit=\"handleWorker(event)\">\n                <label for=\"firstName\">First name</label>\n                <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n                <label for=\"lastName\">Last name</label>\n                <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"last name\" required>\n                <label for=\"IDnumber\">ID Number</label>\n                <input type=\"number\" name=\"IDnumber\" id=\"IDnumber\" required>\n                <input type=\"submit\" value=\"LogIn\">        \n            </form>\n        ";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderHandleWorker(document.querySelector("#register"));
function handleWorker(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var idNumber = ev.target.IDnumber.value;
        var worker = new Employ(firstName, lastName, idNumber);
        //add to array
        workers.push(worker);
        //seich in view
        renderLoggedUser(worker, document.querySelector("#register"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderLoggedUser(worker, rootElement) {
    try {
        var html = "<h2>Hello " + worker.firstName + "</h2>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
        renderHandleTimeClock(document.querySelector("#timeClock"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderHandleTimeClock(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handletimeclock(event)\">\n            <h2>your time cloke for today:</h2>\n            <label for=\"entary\">start time</label>\n            <input type=\"datetime-local\" name=\"entary\" id=\"entary\">\n            <label for=\"exit\">exit time</label>\n            <input type=\"datetime-local\" name=\"exit\" id=\"exit\">\n            <input type=\"submit\" value=\"Add\">\n        </form>";
        if (!rootElement)
            throw new Error("no root elemant");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handletimeclock(ev) {
    try {
        ev.preventDefault();
        //get entary time
        var entaryTime = ev.targer.entary.value;
        //get exit time
        var exitTime = ev.target.exit.value;
        console.log(entaryTime, exitTime);
    }
    catch (error) {
        console.error(error);
    }
}
