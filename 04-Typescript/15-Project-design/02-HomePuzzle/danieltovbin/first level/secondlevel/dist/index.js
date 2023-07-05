// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.
// ## Levels ##
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// entities: User, Hour
//Model
var userArray = [];
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
        this.workingHours = [];
    }
    User.prototype.getTotalWorkHours = function () {
        var totalMinutes = 0;
        for (var _i = 0, _a = this.workingHours; _i < _a.length; _i++) {
            var hour = _a[_i];
            totalMinutes += hour.convertTimeStringToMinutes(hour.exit) - hour.convertTimeStringToMinutes(hour.enctrance);
        }
        var hourInstance = new Hour(" ", " ");
        return hourInstance.convertMinutesToString(totalMinutes);
    };
    return User;
}());
var html = "\n        <label for=\"user-select\">Choose name</label>\n        <select name=\"users\" id=\"user-select\">\n            <option value=\"\">---Choose an option---</option>\n        </select>\n\n        <input type=\"name\" id=\"name-input\" placeholder=\"Add Name\">\n        <label for=\"entrance-input\">Enter entrance time</label>\n        <input type=\"time\" id=\"entrance-input\">\n        <label for=\"exit-input\">Enter exit time</label>\n        <input type=\"time\" id=\"exit-input\">\n        <button id=\"add-user-btn\">Add User</button>\n        <button id=\"submit-btn\">Submit</button>\n        <div id=\"result\"></div>";
var rootElement = document.querySelector("#root");
if (rootElement) {
    rootElement.innerHTML = html;
    var addUserBtn = document.querySelector('#add-user-btn');
    if (addUserBtn) {
        addUserBtn.addEventListener("click", addUser);
    }
}
function addUser() {
    var userSelect = document.querySelector("#user-select");
    var nameInput = document.querySelector("#name-input");
    var entranceInput = document.querySelector("#entrance-input");
    var exitinput = document.querySelector("#exit-input");
    var name = nameInput.value;
    var entrance = entranceInput.value;
    var exit = exitinput.value;
    if (name && entrance && exit) {
        var user = new User(name);
        var hour = new Hour(entrance, exit);
        user.workingHours.push(hour);
        userArray.push(user);
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        userSelect.add(option);
        nameInput.value = '';
        entranceInput.value = '';
        exitinput.value = '';
    }
}
var hourArray = [];
var Hour = /** @class */ (function () {
    function Hour(enctrance, exit) {
        this.enctrance = enctrance;
        this.exit = exit;
        var entranceTime = this.convertTimeStringToMinutes(enctrance);
        var exitime = this.convertTimeStringToMinutes(exit);
        var totalTime = exitime - entranceTime;
        this.id = this.convertMinutesToString(totalTime);
    }
    Hour.prototype.convertTimeStringToMinutes = function (timeInString) {
        var _a = timeInString.split(":"), hours = _a[0], minutes = _a[1];
        var totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
    };
    Hour.prototype.convertMinutesToString = function (minutes) {
        var hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        var mins = (minutes % 60).toString().padStart(2, "0");
        return hours + ":" + mins;
    };
    return Hour;
}());
var submitBtn = document.querySelector("#submit-btn");
if (submitBtn) {
    submitBtn.addEventListener("click", displayUserWorkHours);
}
function displayUserWorkHours() {
    var userSelect = document.querySelector("#user-select");
    var selectedUserName = userSelect.value;
    var resultDiv = document.querySelector("#result");
    if (selectedUserName) {
        var user = userArray.find(function (u) { return u.userName === selectedUserName; });
        if (user) {
            var totalWorkHours = user.getTotalWorkHours();
            resultDiv.textContent = "User: " + selectedUserName + ", Total hours worked:" + totalWorkHours;
        }
    }
    else {
        resultDiv.textContent = "";
    }
}
