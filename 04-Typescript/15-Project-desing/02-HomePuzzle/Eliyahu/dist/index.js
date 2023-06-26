var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, houresWork) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.houresWork = houresWork;
        this.id = uid();
    }
    return Employee;
}());
var employees = [
    new Employee("Eli", "Bin", 0),
    new Employee("Yoni", "Jim", 0),
    new Employee("Sara", "Levi", 0)
];
var Entrace = /** @class */ (function () {
    function Entrace(employee, month, date, hours, minutes) {
        this.employee = employee;
        this.month = month;
        this.date = date;
        this.hours = hours;
        this.minutes = minutes;
    }
    return Entrace;
}());
var entraces = [];
var Exit = /** @class */ (function () {
    function Exit(employee, month, date, hours, minutes) {
        this.employee = employee;
        this.month = month;
        this.date = date;
        this.hours = hours;
        this.minutes = minutes;
    }
    return Exit;
}());
var exits = [];
function renderRegisterEmployee(rootElement) {
    try {
        var html = "\n      <h2>If this is your first time here, register: </h2>\n      <form onsubmit=\"handleSignUser(event)\">\n          <input type=\"text\" name=\"firstName\" placeholder=\"first name\" required>\n          <input type=\"text\" name=\"lastName\" placeholder=\"last name\" required>\n          <input type=\"submit\" value=\"Register\">\n      </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderEntraceEmployee(rootElement) {
    try {
        var html = "  <h2>If you've been here before start here:</h2>\n        <form onsubmit=\"handleSetEntrance(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n          " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Entrace\">\n      </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderExitEmployee(rootElement) {
    try {
        var html = "<form onsubmit=\"handleSetExit(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n          " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Exit\">\n      </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderShowEntracesExitsTable(rootElement) {
    try {
        var html = " <h2>To show your work clock time choose your name and press 'Show'.</h2>\n        <form onsubmit=\"handleShowEntracesExitsTable(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n            " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Show\">\n        </form>\n        <h2>To show work clock time of all employees press 'Show All'.\n        <form onsubmit=\"handleShowTableOfAll(event)\">\n        <input type=\"submit\" value=\"Show All\">\n        </form>\n        ";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderEntracesExitsTable(employee, rootElement) {
    try {
        var thisEntraces = entraces.filter(function (entrace) { return entrace.employee.id === employee.id; });
        var thisExits_1 = exits.filter(function (exit) { return exit.employee.id === employee.id; });
        var html_1 = "<h3>Hello " + employee.firstName + " " + employee.lastName + ". Here your work clock time:</h3>\n        <table>\n         <tr>\n           <th>Entrace</th>\n           <th>Exit</th>\n         </tr>";
        thisEntraces.forEach(function (entrace, index) {
            return html_1 += " <tr>\n         <td>" + entrace.date + "/" + entrace.month + " " + entrace.hours + ":" + entrace.minutes + "</td>\n         <td>" + thisExits_1[index].date + "/" + thisExits_1[index].month + " " + thisExits_1[index].hours + ":" + thisExits_1[index].minutes + "</td>\n       </tr>";
        });
        html_1 += "</table>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderEntracesExitsTableOfAll(rootElement) {
    try {
        var html_2 = "<table>\n        <tr>\n          <th>Name</th>\n          <th>Entrace</th>\n          <th>Exit</th>\n        </tr>";
        employees.forEach(function (employee) {
            var thisEntraces = entraces.filter(function (entrace) { return entrace.employee.id === employee.id; });
            var thisExits = exits.filter(function (exit) { return exit.employee.id === employee.id; });
            thisEntraces.forEach(function (entrace, index) {
                return html_2 += " <tr>\n         <td> " + employee.firstName + " " + employee.lastName + " </td>\n         <td>" + entrace.date + "/" + entrace.month + " " + entrace.hours + ":" + entrace.minutes + "</td>\n         <td>" + thisExits[index].date + "/" + thisExits[index].month + " " + thisExits[index].hours + ":" + thisExits[index].minutes + "</td>\n       </tr>";
            });
        });
        html_2 += "</table>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
function handleSignUser(ev) {
    try {
        ev.preventDefault();
        var firstname = ev.target.firstName.value;
        var lastname = ev.target.lastName.value;
        var employee = new Employee(firstname, lastname, 0);
        employees.push(employee);
        console.log(employees);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEntrance(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_1 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_1; });
        var month = new Date().getMonth() + 1;
        var date = new Date().getDate();
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        if (!employee)
            throw new Error("couldn't find this employee");
        var entrace = new Entrace(employee, month, date, hour, minute);
        entraces.push(entrace);
        console.log(entraces);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetExit(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_2 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_2; });
        var month = new Date().getMonth() + 1;
        var date = new Date().getDate();
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        if (!employee)
            throw new Error("couldn't find this employee");
        var exit = new Exit(employee, month, date, hour, minute);
        exits.push(exit);
        console.log(exits);
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowEntracesExitsTable(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_3 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_3; });
        if (!employee)
            throw new Error("couldn't find this employee");
        renderEntracesExitsTable(employee, document.querySelector("#table2"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowTableOfAll(ev) {
    try {
        ev.preventDefault();
        renderEntracesExitsTableOfAll(document.querySelector("#table2"));
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterEmployee(document.querySelector("#register"));
renderEntraceEmployee(document.querySelector("#entrace"));
renderExitEmployee(document.querySelector("#exit"));
renderShowEntracesExitsTable(document.querySelector("#table"));
console.log(employees);
