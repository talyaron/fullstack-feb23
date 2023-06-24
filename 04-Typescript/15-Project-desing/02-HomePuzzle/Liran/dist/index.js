var workerId = 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = workerId++;
    }
    return Employee;
}());
;
var CheckInOut = /** @class */ (function () {
    function CheckInOut(employee, day, start, end) {
        this.employee = employee;
        this.day = day;
        this.start = start;
        this.end = end;
    }
    return CheckInOut;
}());
;
var w1 = new Employee("AVIV", "FREWT");
var w2 = new Employee("ELI", "GORDON");
var w3 = new Employee("AVIVA", "SGTR");
var w4 = new Employee("RAMI", "GORDON");
var w5 = new Employee("ALIZA", "GKIU");
var w6 = new Employee("VIKA", "GRE");
var w7 = new Employee("ADI", "SAF");
var w8 = new Employee("RON", "CLFB");
var w9 = new Employee("HAVIV", "GORDON");
var w10 = new Employee("ELI", "GFDSGF");
var w11 = new Employee("ELI", "WQE");
var hoursDB = [];
var employees = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11];
var workers = [];
var _loop_1 = function (i) {
    employees.forEach(function (elem) {
        var checkInOut = new CheckInOut(elem, (i + 1 < 10 ? "0" + (i + 1) : i + 1) + ".1.23", "07:00", "17:00");
        hoursDB.push(checkInOut);
    });
};
for (var i = 0; i < 28; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    employees.forEach(function (elem) {
        var checkInOut = new CheckInOut(elem, (i + 1 < 10 ? "0" + (i + 1) : i + 1) + ".6.23", "07:00", "17:00");
        hoursDB.push(checkInOut);
    });
};
for (var i = 0; i < 28; i++) {
    _loop_2(i);
}
for (var i = 0; i < 5; i++) {
    var checkInOut = new CheckInOut(employees[i + 1], (i + 1 < 10 ? "0" + (i + 1) : i + 1) + ".3.23", "07:00", "16:25");
    hoursDB.push(checkInOut);
}
var selectedWorker;
/** render function **/
function renderLoggedEmplyoee(employee, rootElement) {
    try {
        var html = "<h2>Hello " + employee.firstName + "</h2>\n        <form onclick=\"handleSign(event)\">\n        <input type=\"button\" id=\"checkIn\" value=\"Check In\">\n        <input type=\"button\" id=\"CheckOut\" value=\"Check Out\">\n        <input type=\"button\" id=\"Monthlyhours\" value=\"Calculate Monthly Hours\">\n    </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderMain(rootElement) {
    try {
        var html = "<h2>" + new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + "</h2>\n        <form onclick=\"handleCheckInOut(event)\">\n        <input type=\"button\" id=\"NewEmployee\" value=\"New Employee\">\n        <input type=\"button\" id=\"CheckInOut\" value=\"Check InOut\">\n        <input type=\"button\" id=\"admin\" value=\"Administrator\">\n    </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderEmployeeList(rootElement, hide) {
    try {
        var cntEmployees_1 = 1;
        var html = void 0;
        if (hide) {
            html = "";
        }
        else {
            html = "<form onsubmit=\"handleSelectEmployee(event)\">\n              <select id=\"employeeList\">\n              " + employees.map(function (employee) {
                return "<option name=\"Ename\" value=\"" + cntEmployees_1++ + "\">" + employee.firstName + " " + employee.lastName + "</option>";
            }) + "\n                </select>\n                <input type=\"submit\" value=\"Sign\">\n              </form>";
        }
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAdmin(rootElement, hide) {
    try {
        if (!rootElement)
            throw new Error("No root element");
        var html = void 0;
        if (hide) {
            html = "";
        }
        else {
            html = "<form onsubmit=\"handleFillter(event)\">\n                    <h3>Search</h3>\n                  <label for=\"firstName\">First name</label>\n                  <input type=\"text\" name=\"sfirstName\" id='sfirstName' placeholder=\"first name\">\n                  <label for=\"lastName\">Last name</label>\n                  <input type=\"text\" name=\"slastName\" id=\"'slastName\" placeholder=\"last name\">\n                  <label for=\"id\">Worker ID</label>\n                  <input type=\"text\" name=\"sworkerId\" id=\"'sworkerId\" placeholder=\"worker Id\">\n                  <label for=\"month\">Month</label>\n                  <input type=\"text\" name=\"smonth\" id=\"'smonth\" placeholder=\"Month\">\n                  <input type=\"submit\" value=\"Filter\">\n              </form>";
        }
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderSearch(rootElement, firstName, lastName, id, month, hide) {
    try {
        if (!rootElement)
            throw new Error("No root element");
        var html = "";
        if (!hide) {
            var fName = "first name";
            var lName = "last name";
            var wId = null;
            if ((firstName !== "" && lastName !== "") || !(isNaN(id))) {
                var worker = employees.find(function (elem) { return (elem.firstName == firstName && elem.lastName == lastName) || elem.id == id; });
                if (worker === undefined) {
                    alert("Worker not found");
                    renderTable(document.querySelector("#table"), null, null, null, null, true);
                }
                else {
                    fName = worker.firstName;
                    lName = worker.lastName;
                    wId = worker.id;
                    renderTable(document.querySelector("#table"), null, null, wId, month, false);
                }
            }
            else if (firstName !== "" && firstName !== null) {
                var length = workers.length;
                for (var i = 0; i < length; i++)
                    workers.pop();
                employees.forEach(function (elem) {
                    if (elem.firstName == firstName)
                        workers.push(elem);
                });
                renderTable(document.querySelector("#table"), firstName.toUpperCase(), null, null, null, false);
            }
            else if (lastName !== "" && lastName !== null) {
                var length = workers.length;
                for (var i = 0; i < length; i++)
                    workers.pop();
                employees.forEach(function (elem) {
                    if (elem.lastName == lastName)
                        workers.push(elem);
                });
                renderTable(document.querySelector("#table"), null, lastName.toUpperCase(), null, null, false);
            }
            else if (month) {
                renderTable(document.querySelector("#table"), null, null, null, month, false);
            }
            html += "<form onsubmit=\"handleUpdate(event)\">\n                      <label for=\"firstName\">First name</label>\n                      <input type=\"text\" name=\"ufirstName\" id=\"ufirstName\" placeholder=\"" + fName + "\">\n                      <label for=\"lastName\">Last name</label>\n                      <input type=\"text\" name=\"ulastName\" id=\"ulastName\" placeholder=\"" + lName + "\">\n                      <label for=\"id\">Worker ID</label>\n                      <input type=\"text\" readOnly name=\"uworkerId\" id=\"uworkerId\" value=\"" + wId + "\">\n                      <input type=\"submit\" value=\"Update\">\n                  </form>";
        }
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTable(rootElement, firstName, lastName, id, month, hide) {
    try {
        if (!rootElement)
            throw new Error("No root element");
        var html_1 = "";
        var worker = void 0;
        if (!hide) {
            if (id === null && month === null) {
                html_1 = "<h2>Employees List</h2>\n                     <table style=\"width:75%\">\n                     <tr>\n                     <th>First Name</th>\n                     <th>Last Name</th>\n                     <th>Emplyoee ID</th>\n                     </tr>";
                workers.forEach(function (elem) {
                    if ((elem.firstName == firstName && lastName == null) || (firstName == null && elem.lastName == lastName)) {
                        html_1 += "<tr>\n                          <th>" + elem.firstName + "</th>\n                          <th>" + elem.lastName + "</th>\n                          <th>" + elem.id + "</th>\n                        </tr>";
                    }
                });
            }
            else if (firstName === null && lastName === null && id === null && month) {
                if (hoursDB !== null) {
                    html_1 = "<h2>Employee working hours</h2>\n                     <table style=\"width:75%\">\n                     <tr>\n                     <th>Date</th>\n                     <th>Name</th>\n                     <th>Check In</th>\n                     <th>Check Out</th>\n                     </tr>";
                    hoursDB.forEach(function (elem) {
                        var fullDate = elem.day.split(".");
                        if (fullDate[1] == month) {
                            html_1 += "<tr>\n                             <th>" + elem.day + "</th>\n                             <th>" + (elem.employee.firstName + " " + elem.employee.lastName) + "</th>\n                             <th>" + elem.start + "</th>\n                             <th>" + elem.end + "</th>\n                           </tr>";
                        }
                    });
                }
            }
            else {
                worker = employees.find(function (elem) { return elem.id == id; });
                if (worker !== undefined) {
                    html_1 = "<h2>Employee working hours</h2>\n                     <table style=\"width:75%\">\n                     <tr>\n                     <th>Date</th>\n                     <th>Check In</th>\n                     <th>Check Out</th>\n                     </tr>";
                    if (month) {
                        hoursDB.forEach(function (elem) {
                            var monthIndx = elem.day.split(".");
                            if (elem.employee.id == id && monthIndx[1] == month) {
                                html_1 += "<tr>\n                              <th>" + elem.day + "</th>\n                              <th>" + elem.start + "</th>\n                              <th>" + elem.end + "</th>\n                            </tr>";
                            }
                        });
                    }
                    else {
                        hoursDB.forEach(function (elem) {
                            if (elem.employee.id == id) {
                                html_1 += "<tr>\n                              <th>" + elem.day + "</th>\n                              <th>" + elem.start + "</th>\n                              <th>" + elem.end + "</th>\n                            </tr>";
                            }
                        });
                    }
                    debugger;
                    var totalMonthHours = calculateMHours(worker, Number(month));
                    html_1 += "</table>\n                            <h4>Total monthly working hours: " + Math.floor(totalMonthHours / 60) + ":" + Math.floor(totalMonthHours % 60);
                }
            }
        }
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderRegisterEmployee(rootElement, hide) {
    try {
        var html = void 0;
        if (hide) {
            html = "";
        }
        else {
            html = "<form onsubmit=\"handleRegisterEmployee(event)\">\n                  <label for=\"firstName\">First name</label>\n                  <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n                  <label for=\"lastName\">Last name</label>\n                  <input type=\"text\" name=\"lastName\" id=\"'lastName\" placeholder=\"last name\" required>\n                  <input type=\"submit\" value=\"Register\">\n              </form>";
        }
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCheckInOut(rootElement) {
    try {
        var html = "<form onclick=\"handleSign(event)\">\n        <input type=\"button\" id=\"checkIn\" value=\"Check In\">\n        <input type=\"button\" id=\"CheckOut\" value=\"Check Out\">\n    </form>";
        // <form onclick="handleSign(event)">
        //       <input type="button" id="checkIn" value="Check In">
        //       <input type="button" id="checkOut" value="Check Out">
        //   </form>`;
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
/** general function **/
function calculateMHours(worker, month) {
    var sumHours = 0;
    debugger;
    hoursDB.forEach(function (elem) {
        if (worker.id === elem.employee.id) {
            var workDate = elem.day.split('.');
            var workMonth = workDate[1];
            if (elem.start !== null && elem.end !== null && month.toString() == workMonth) {
                var sTime = elem.start.split(':');
                var eTime = elem.end.split(':');
                var hDiff = Math.abs(Number(eTime[0]) - Number(sTime[0]));
                var mDiff = Math.abs(Number(eTime[1]) - Number(sTime[1]));
                sumHours += (Math.floor(hDiff * 60) + Math.floor((60 % hDiff)) + mDiff);
            }
        }
    });
    return sumHours;
}
/** hundle function **/
function handleRegisterEmployee(ev) {
    try {
        ev.preventDefault();
        var firstName_1 = ev.target.firstName.value.toUpperCase();
        var lastName_1 = ev.target.lastName.value.toUpperCase();
        if (employees.length > 0) {
            employees.forEach(function (employee) {
                if (firstName_1 == employee.firstName && lastName_1 == employee.lastName)
                    throw new Error("Name already exist in the system");
            });
        }
        var employee = new Employee(firstName_1, lastName_1);
        //add to model
        employees.push(employee);
        //control->view
        renderEmployeeList(document.querySelector("#employeesList"), false);
        //renderLoggedEmplyoee(employee, document.querySelector("#register"));
        console.log(firstName_1, lastName_1);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdate(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.ufirstName.value.toUpperCase();
        var lastName = ev.target.ulastName.value.toUpperCase();
        var id_1 = Number(ev.target.uworkerId.value);
        var workerToUpdate = employees.findIndex(function (elem) { return elem.id === id_1; });
        if (firstName !== "") {
            employees[workerToUpdate].firstName = firstName;
        }
        if (lastName !== "") {
            employees[workerToUpdate].lastName = lastName;
        }
        alert("Worker updated");
    }
    catch (error) {
        console.error(error);
    }
}
function handleFillter(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.sfirstName.value.toUpperCase();
        var lastName = ev.target.slastName.value.toUpperCase();
        var id = ev.target.sworkerId.value !== "" ? Number(ev.target.sworkerId.value) : NaN;
        var month = ev.target.smonth.value;
        if (firstName || lastName || !(isNaN(id)) || month) {
            renderSearch(document.querySelector("#update"), firstName, lastName, id, month, false);
        }
        renderRegisterEmployee(document.querySelector("#register"), true);
        renderEmployeeList(document.querySelector("#employeesList"), false);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSign(ev) {
    try {
        ev.preventDefault();
        var action = ev.target.value;
        var tempEmp = hoursDB.find(function (elem) { return elem.employee.id === selectedWorker.id; });
        if (action === "Check In") {
            if (tempEmp !== undefined) {
                alert("Already checked in for today");
            }
            else {
                var day = new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear();
                var start = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
                var pStart = start.split(":");
                pStart.forEach(function (element) {
                    if (Number(element) < 10)
                        element = "0" + element;
                });
                var newSign = new CheckInOut(selectedWorker, day, start, null);
                hoursDB.push(newSign);
                alert("Checked In: " + pStart[0] + ":" + pStart[1] + ":" + pStart[2]);
                renderRegisterEmployee(document.querySelector("#register"), false);
                renderEmployeeList(document.querySelector("#employeesList"), true);
            }
        }
        else if (action === "Check Out") {
            if (tempEmp === undefined)
                alert("Didn't checked in for today");
            else if ((tempEmp === null || tempEmp === void 0 ? void 0 : tempEmp.end) !== null) {
                alert("Already checked out for today");
            }
            else {
                var empIndx = hoursDB.findIndex(function (elem) { return elem.employee.id === selectedWorker.id; });
                var end = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
                var pend = end.split(":");
                pend.forEach(function (element) {
                    if (Number(element) < 10)
                        element = "0" + element;
                });
                hoursDB[empIndx].end = end;
                alert("Checked Out: " + pend[0] + ":" + pend[1] + ":" + pend[2]);
            }
        }
        else {
            if ((tempEmp === null || tempEmp === void 0 ? void 0 : tempEmp.end) !== null) {
                var res = calculateMHours(selectedWorker, new Date().getMonth() + 1);
                var hours = Math.floor(res / 60);
                var minutes = res % 60;
                alert("Hi " + selectedWorker.firstName + " you worked " + hours + ":" + minutes + " hours this month");
            }
        }
        renderRegisterEmployee(document.querySelector("#register"), true);
        renderEmployeeList(document.querySelector("#employeesList"), false);
    }
    catch (error) {
        console.error(error);
    }
}
function handleCheckInOut(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var action = ev.target.id;
        if (action === "NewEmployee") {
            renderRegisterEmployee(document.querySelector("#register"), false);
            renderEmployeeList(document.querySelector("#employeesList"), true);
            renderAdmin(document.querySelector("#administrator"), true);
            renderTable(document.querySelector("#table"), null, null, null, null, true);
        }
        else if (action === "CheckInOut") {
            {
                if (employees.length < 1)
                    alert("NO Emplyoees");
            }
            renderRegisterEmployee(document.querySelector("#register"), true);
            renderEmployeeList(document.querySelector("#employeesList"), false);
            renderAdmin(document.querySelector("#administrator"), true);
            renderTable(document.querySelector("#table"), null, null, null, null, true);
        }
        else {
            renderRegisterEmployee(document.querySelector("#register"), true);
            renderEmployeeList(document.querySelector("#employeesList"), true);
            renderAdmin(document.querySelector("#administrator"), false);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSelectEmployee(ev) {
    try {
        ev.preventDefault();
        var html = document.getElementById("employeeList");
        if (!html)
            throw new Error("No list");
        var text = html.options[html.selectedIndex].text;
        renderEmployeeList(document.querySelector("#employeesList"), true);
        renderRegisterEmployee(document.querySelector("#register"), true);
        var workerName_1 = text.split(' ');
        var worker = employees.find(function (elem) { return elem.firstName == workerName_1[0] && elem.lastName == workerName_1[1]; });
        if (worker === undefined)
            throw new Error("No Employee");
        selectedWorker = worker;
        renderLoggedEmplyoee(worker, document.querySelector("#register"));
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
