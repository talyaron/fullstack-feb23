// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var worker = /** @class */ (function () {
    function worker(name, enterExit, date, time) {
        this.name = name;
        this.enterExit = enterExit;
        this.date = date;
        this.time = time;
        this.id = uid();
    }
    // date(){
    //    return new Date().toLocaleDateString()
    // }
    // time(){
    //     let time=new Date().getHours() + ":" + new Date().getMinutes() ;
    worker.prototype.dateUpdate = function (day, month, year) {
        this.date = new Date(day, month, year);
    };
    worker.prototype.timeUpdate = function (hour, min) {
        this.time = new Date().setUTCHours(hour, min);
    };
    worker.prototype.handleBtnTime = function () {
        try {
            var time = document.querySelector(".workertime__time");
            time === null || time === void 0 ? void 0 : time.innerHTML = "\n                    <form onsubmit=\"changeTime(event)\">\n                    \n                    hour:<input type=\"text\" name=\"newhour\" style=\"width: 1rem;\">\n                    min:<input type=\"text\" name=\"newmin\" style=\"width: 1rem;\">\n                    <button >apply</button>\n                    </form>\n                    ";
        }
        catch (error) {
            console.error(error);
        }
    };
    return worker;
}());
renderLogs(document.querySelector(".wrapper"));
renderForm(document.querySelector(".wrapper"));
var workers = [];
function handleworker(ev) {
    ev.preventDefault();
    var workername = ev.target.workername.value;
    var enterExit = ev.target.enterExit.value;
    var date = new Date().toLocaleDateString();
    var time = new Date().getHours() + ":" + new Date().getMinutes();
    var newworker = new worker(workername, enterExit, date, time);
    workers.push(newworker);
    renderworker(newworker);
}
function renderForm(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handleworker(event)\" >\n        <input type=\"text\" placeholder=\"worker name\" name=\"workername\">\n        <select name=\"from\" id=\"enterExit\">\n        <option value=\"enter\">enter</option>\n        <option value=\"exit\">exit</option>\n        </select>\n        <button >submit</button>\n        </form>\n        \n        ";
        rootElement.innerHTML += html;
        if (!rootElement)
            throw new Error("no root element");
    }
    catch (error) {
        console.error(error);
    }
}
function renderworker(worker) {
    var workerlog = document.querySelector('.workerlog');
    var html = "\n    <div class=\"workerlog__worker\" id=\"" + worker.id + "\">\n        <div class=\"workername\" >\n      \n            <p>worker:" + worker.name + "</p> \n        </div>\n        <div class=\"workerdate\">\n            <button class=\"btn btn__date\">edit</button>\n           \n            <p class=\"workerdate__date\">date:" + worker.date + " </p>\n        </div>\n        <div class=\"workertime\">\n            <button class=\"btn btn__time\" onclick=\"handleBtnTime(" + worker.id + ")\">edit2</button>\n            <p class=\"workertime__time\">time:" + worker.time + "</p>\n        </div>\n            <p>" + worker.enterExit + "</p>\n        \n    </div>";
    workerlog === null || workerlog === void 0 ? void 0 : workerlog.innerHTML += html;
}
function handleBtnTime(worker) {
    console.log(worker.id);
    try {
        var time = document.querySelector("#" + worker.id);
        time === null || time === void 0 ? void 0 : time.innerHTML = "\n        <form onsubmit=\"changeTime(event)\">\n        \n        hour:<input type=\"text\" name=\"newhour\" style=\"width: 1rem;\">\n        min:<input type=\"text\" name=\"newmin\" style=\"width: 1rem;\">\n        <button >apply</button>\n        </form>\n        ";
    }
    catch (error) {
        console.error(error);
    }
}
function changeTime(ev) {
    var time = document.querySelector(".workertime__time");
    ev.preventDefault();
    var newmin = ev.target.newmin.value;
    var newhour = ev.target.newhour.value;
    var html = "\n    <p class=\"workerdate__time\">time:" + newhour + ":" + newmin + " </p>\n    ";
    time === null || time === void 0 ? void 0 : time.innerHTML = html;
}
function renderLogs(rootElement) {
    try {
        var html = "\n    <div class=\"workerlog\">\n        <div class=\"workerlog__info\">\n            <p>name</p> \n            <p>date</p>\n            <p>time</p>\n            <p>enter/exit</p>\n            \n        </div>\n        \n     \n    </div>\n    ";
        rootElement.innerHTML = html;
        if (!rootElement)
            throw new Error("no root element");
    }
    catch (error) {
        console.error(error);
    }
}
