// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table.
// entrance and exit times.
var Movment = /** @class */ (function () {
    function Movment(entrance, exit) {
        this.entrance = entrance;
        this.exit = exit;
        this.id = Date.now().toString(32) + Math.random().toString(16);
    }
    Movment.prototype.calculatDayliHours = function () {
        try {
            if (!this.entrance || this.entrance)
                throw new Error("The dittails are missing");
            var dayliHours = this.exit - this.entrance;
            return dayliHours;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return Movment;
}());
var movments = [];
// workers.
var Worker = /** @class */ (function () {
    function Worker(name, email) {
        this.name = name;
        this.email = email;
        this.id = Date.now().toString(32) + Math.random().toString(16);
    }
    return Worker;
}());
var workers = [];
//join classes
var MovmentWorker = /** @class */ (function () {
    function MovmentWorker(worker, movment) {
        this.worker = worker;
        this.movment = movment;
    }
    return MovmentWorker;
}());
var movmentWorkers = [];
// view controlers
//register user
function renderRegisterWorker(rootElement) {
    try {
        if (!rootElement)
            throw new Error("Missing root element");
        var html = "\n        <form onsubmit=\"handleRegisterUser(event)\">\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\" required>\n          <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\" required>\n          <input type=\"submit\" value=\"register\">\n\n          <select name=\"entrance\" id=\"entrance\" placeholder=\"entrance\"></select>\n          <select name=\"exit\" id=\"exit\" placeholder=\"exit\"></select>\n        </form>";
        rootElement.innerHTML = html;
        // return html;
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterWorker(document.querySelector("#register"));
function renderLoggedWorker(worker, rootElement) {
    try {
        var html = "<h2>Hello " + worker.name + "</h2>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for worker, and show each worker total times.
//    the user could edit entrance details.
