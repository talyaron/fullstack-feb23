//create unice ID
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var WorKer = /** @class */ (function () {
    function WorKer(fullName, enterance, exit) {
        this.fullName = fullName;
        this.enterance = enterance;
        this.exit = exit;
        this.id = uid();
    }
    WorKer.prototype.calculateDailyHoures = function () {
        try {
            var enterHour = this.enterance;
            var exitHour = this.exit;
            if (!enterHour || !exitHour)
                throw new Error("Missing enterance or exit");
            var dailyhr = exitHour - enterHour;
            return dailyhr;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    };
    return WorKer;
}());
var worKers = [];
function renderRegisterWorker(rootElement) {
    try {
        var html = "\n          <form onsubmit=\"handleRegisterUser(event)\">\n              <label for=\"fullname\">Full name</label>\n              <input type=\"text\" name=\"fullName\" id='fullName' placeholder=\"full name\" required>\n              <label for=\"enter\">enter</label>\n              <input type=\"time\" name=\"enter\" id=\"'enter\" placeholder=\"last name\" required>\n              <label for=\"exit\">exit</label>\n              <input type=\"time\" name=\"exit\" id=\"exit\" required>\n              <input type=\"submit\" value=\"Register\">\n          </form>";
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
        var enter = ev.target.enter.value;
        var exit = ev.target.exit.value;
        var worker = new WorKer(fullName, enter, exit);
        //add to model
        worKers.push(worker);
        //control->view
        console.log(fullName, enter, exit);
    }
    catch (error) {
        console.error(error);
    }
}
function renderRegisterWorker(document, querySelector) { }
("#register");
;
