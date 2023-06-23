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
// view->model controlers
function handleRegisterWorker(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var email = ev.target.elements.email.value;
        // const entrance = ev.target.elements.entrance.value;
        // const exit = ev.target.elements.exit.value;
        var worker = new Worker(name, email);
        //add to model
        workers.push(worker);
        // renderLoggedWorker(worker, document.querySelector("#register"));
        console.log(name, email);
    }
    catch (error) {
        console.error(error);
    }
}
// view controlers
//register user
renderRegisterWorker(document.querySelector("#register"));
function renderRegisterWorker(rootElement) {
    try {
        if (!rootElement)
            throw new Error("Missing root element");
        var html = "\n        <div class=\"register\">\n        <form onsubmit=\"handleRegisterUser(event)\">\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\" required>\n          <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\" required>\n          \n          <label for=\"entrance\">entrance</label>\n          <input type=\"time\" name=\"entrance\" id=\"entrance\">\n          <label for=\"exit\">exit</label>\n          <input type=\"time\" name=\"exit\" id=\"exit\">\n\n          <input type=\"submit\" value=\"register\">\n        </form>\n        </div>";
        rootElement.innerHTML = html;
        // return html;
    }
    catch (error) {
        console.error(error);
    }
}
function calculatDayliHours(entrance, exit, dayliHours) {
    try {
        if (!entrance || !exit)
            throw new Error("The dittails are missing");
        var dayliHours_1 = this.exit - this.entrance;
        return dayliHours_1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
// function renderDayliHours(rootElement: HTMLElement | null) {
//     try {
//         if (!rootElement) throw new Error("Missing root element");
//         const html = `
//         <div class="dayliHours">
//            ${calculatDayliHours.dayliHours}
//         </div>`;
//         rootElement.innerHTML = html;
//         // return html;
//     } catch (error) {
//         console.error(error);
//     }
// }
// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for worker, and show each worker total times.
//    the user could edit entrance details.
