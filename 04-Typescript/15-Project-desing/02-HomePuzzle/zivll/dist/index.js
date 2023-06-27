// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details
// <select name="username" id="username">
//           <option value="userId"></option>
//         </select>
var uid = function () {
    return Math.round(Math.random() * 1000000);
};
var Employee = /** @class */ (function () {
    function Employee(userName) {
        this.userName = userName;
        this.id = uid();
    }
    return Employee;
}());
var employees = [
    new Employee("\u05D6\u05D9\u05D5 \u05DC\u05DC\u05D5\u05E0\u05E7"),
    new Employee("\u05E1\u05D9\u05D2\u05DC \u05D1\u05E8\u05D3\u05D4"),
    new Employee("\u05D0\u05D1\u05D9 \u05D0\u05E8\u05D5\u05E0\u05E1\u05D5\u05DF"),
    new Employee("\u05E0\u05D8\u05DC\u05D9 \u05D0\u05D5\u05D7\u05D9\u05D5\u05DF"),
];
renderEmployees(document.querySelector("#selectEmployee"));
renderLogInButton(document.querySelector(".new-log"));
var NewLog = /** @class */ (function () {
    function NewLog(userId, date, signIn, signOut) {
        this.userId = userId;
        this.date = date;
        this.signIn = signIn;
        this.signOut = signOut;
    }
    return NewLog;
}());
var User = /** @class */ (function () {
    function User(userId, date, signIn, signOut) {
        this.userId = userId;
        this.date = date;
        this.signIn = signIn;
        this.signOut = signOut;
    }
    return User;
}());
var logsById = [];
var user = [];
function hundleEmployeeSelected(ev) {
    console.dir(ev);
    var employeeId = ev.target.form[0].value;
    // const date = ev.target.value;
    logsById.forEach(function (employee) {
        if (employee.userId === employeeId)
            user.push(new User(employee.userId, employee.date, employee.signIn, employee.signOut));
    });
    debugger;
    user.forEach(function (workday) {
        if (workday.signIn === undefined) {
            delete workday.signIn;
        }
    });
    user.forEach(function (workday) {
        if (workday.signOut === undefined) {
            delete workday.signOut;
        }
    });
    var html = "<thead>\n    <tr>\n      <th>\u05EA\u05D0\u05E8\u05D9\u05DA</th>\n      <th>\u05E9\u05E2\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4</th>\n      <th>\u05E9\u05E2\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4</th>\n    </tr>\n  </thead>";
    user.forEach(function (workday) {
        html += "<tr>\n  <td>\u05EA\u05D0\u05E8\u05D9\u05DA: " + workday.date + "</td>\n  <td>\u05E9\u05E2\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4: " + workday.signIn + "</td>\n  <td>\u05E9\u05E2\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4: " + workday.signOut + "</td>\n</tr>";
    });
    var rootTable = document.querySelector("#employeeTimeClockTable");
    if (!rootTable)
        throw new Error("table div is missing");
    rootTable.innerHTML = "<table>" + html + "</table>";
}
function renderEmployees(rootElement) {
    var html = "<form onsubmit=\"handleSubmit(event)\"><label for=\"username\">\u05D9\u05E9 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05E2\u05D5\u05D1\u05D3 \u05DE\u05D4\u05E8\u05E9\u05D9\u05DE\u05D4</label><br>\n  <select name=\"username\" id=\"username\" onchange=\"switchingUser()\">" + employees.map(function (employee) {
        return "<option value=\"" + employee.id + "\">" + employee.userName + "</option>";
    }) + "</select><br><label for=\"date\">\u05DB\u05D0\u05DF \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D7\u05D5\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9</label><br><input type=\"date\" name=\"date\" id=\"date\" onchange=\"switchingUser()\" /><br><input type=\"submit\" value=\"\u05D4\u05E6\u05D2 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA\" onclick=\"hundleEmployeeSelected(event)\"> </form>\n  ";
    // <button onclick="hundleEmployeeSelected(event)" value="">הצג נוכחות</button>
    if (!rootElement)
        throw new Error("missing HTML container");
    rootElement.innerHTML = html;
}
function renderLogInButton(rootElement) {
    var html = "<button class=\"btn-log\" id=\"new-log\" onclick=\"hundleUsersLogin(event)\">\u05D4\u05D7\u05EA\u05DE\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4</button>";
    if (!rootElement)
        throw new Error("rootElement is missing");
    rootElement.innerHTML = html;
}
function renderLogoutButton(rootElement) {
    var html = "<button class=\"btn-log\" onclick=\"hundleUsersLogOut(event)\">\u05D4\u05D7\u05EA\u05DE\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4</button>";
    if (!rootElement)
        throw new Error("rootElement is missing");
    rootElement.innerHTML = html;
}
function hundleUsersLogin(ev) {
    // console.log(ev);
    var userId = ev.target.parentElement.parentElement.children[2].children[0].children[2]
        .value;
    var date;
    if (ev.target.parentElement.parentElement.children[2].children[0].children[6]
        .value === "") {
        date = currentDateToDispaly();
    }
    else {
        date =
            ev.target.parentElement.parentElement.children[2].children[0].children[6]
                .value;
    }
    var signIn = currentTimeToDispaly();
    logsById.push({ userId: userId, date: date, signIn: signIn });
    renderLogoutButton(document.querySelector(".new-log"));
    console.log(date);
}
function hundleUsersLogOut(ev) {
    var userId = ev.target.parentElement.parentElement.children[2].children[0].children[2]
        .value;
    var date;
    if (ev.target.parentElement.parentElement.children[2].children[0].children[6]
        .value === "") {
        date = currentDateToDispaly();
    }
    else {
        date =
            ev.target.parentElement.parentElement.children[2].children[0].children[6]
                .value;
    }
    var signOut = currentTimeToDispaly();
    logsById.push({ userId: userId, date: date, signOut: signOut });
    ev.target.classList.add("clicked");
}
function currentTimeToDispaly() {
    try {
        if (new Date().getMinutes() < 10) {
            return new Date().getHours() + ":0" + new Date().getMinutes();
        }
        return new Date().getHours() + ":" + new Date().getMinutes();
    }
    catch (error) {
        console.error(error);
    }
}
function currentDateToDispaly() {
    try {
        return new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    }
    catch (error) {
        console.error(error);
    }
}
function switchingUser(ev) {
    renderLogInButton(document.querySelector(".new-log"));
}
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev);
}
