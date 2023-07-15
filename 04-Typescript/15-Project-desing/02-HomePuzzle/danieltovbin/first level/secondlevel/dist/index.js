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
<<<<<<< HEAD
    User.prototype.getMonthlyWorkHours = function (monthDays) {
        var totalMinutes = 0;
        for (var _i = 0, _a = this.workingHours; _i < _a.length; _i++) {
            var hour = _a[_i];
            totalMinutes += hour.calculateTotalMinutes;
        }
        // let dailyMinutes = this.calculateDailyMinutes(entrance, exit);
        // const monthlyMinutes = dailyMinutes * monthDays;
        var hourInstance = new Hour("", "");
        return hourInstance.convertMinutesToString(monthlyMinutes);
    };
    User.prototype.calculateDailyMinutes = function (entrance, exit) {
        var entranceTime = this.convertTimeStringToMinutes(entrance);
        var exitTime = this.convertTimeStringToMinutes(exit);
        var totalMinutes = exitTime - entranceTime;
        return totalMinutes;
    };
    User.prototype.convertTimeStringToMinutes = function (timeInString) {
        var _a = timeInString.split(":"), hours = _a[0], minutes = _a[1];
        var totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
=======
    User.prototype.getTotalWorkHours = function () {
        var totalMinutes = 0;
        for (var _i = 0, _a = this.workingHours; _i < _a.length; _i++) {
            var hour = _a[_i];
            totalMinutes += hour.convertTimeStringToMinutes(hour.exit) - hour.convertTimeStringToMinutes(hour.enctrance);
        }
        var hourInstance = new Hour(" ", " ");
        return hourInstance.convertMinutesToString(totalMinutes);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    };
    return User;
}());
var html = "\n        <label for=\"user-select\">Choose name</label>\n        <select name=\"users\" id=\"user-select\">\n            <option value=\"\">---Choose an option---</option>\n        </select>\n\n        <input type=\"name\" id=\"name-input\" placeholder=\"Add Name\">\n        <label for=\"entrance-input\">Enter entrance time</label>\n        <input type=\"time\" id=\"entrance-input\">\n        <label for=\"exit-input\">Enter exit time</label>\n        <input type=\"time\" id=\"exit-input\">\n        <button id=\"add-user-btn\">Add User</button>\n        <button id=\"submit-btn\">Submit</button>\n        <div id=\"result\"></div>";
var rootElement = document.querySelector("#root");
if (rootElement) {
    rootElement.innerHTML = html;
<<<<<<< HEAD
    var addUserBtn_1 = document.querySelector('#add-user-btn');
    if (addUserBtn_1) {
        addUserBtn_1.addEventListener("click", addUser);
=======
    var addUserBtn = document.querySelector('#add-user-btn');
    if (addUserBtn) {
        addUserBtn.addEventListener("click", addUser);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    }
}
function addUser() {
    var userSelect = document.querySelector("#user-select");
    var nameInput = document.querySelector("#name-input");
    var entranceInput = document.querySelector("#entrance-input");
<<<<<<< HEAD
    var exitInput = document.querySelector("#exit-input");
    var name = nameInput.value;
    var entrance = entranceInput.value;
    var exit = exitInput.value;
=======
    var exitinput = document.querySelector("#exit-input");
    var name = nameInput.value;
    var entrance = entranceInput.value;
    var exit = exitinput.value;
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
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
<<<<<<< HEAD
        exitInput.value = '';
=======
        exitinput.value = '';
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    }
}
var hourArray = [];
var Hour = /** @class */ (function () {
<<<<<<< HEAD
    function Hour(entrance, exit) {
        this.entrance = entrance;
        this.exit = exit;
        var entranceTime = this.convertTimeStringToMinutes(entrance);
=======
    function Hour(enctrance, exit) {
        this.enctrance = enctrance;
        this.exit = exit;
        var entranceTime = this.convertTimeStringToMinutes(enctrance);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
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
<<<<<<< HEAD
var addUserBtn = document.querySelector("#add-user-btn");
if (addUserBtn) {
    addUserBtn.addEventListener("click", addUser);
}
var submitBtn = document.querySelector("#submit-btn");
if (submitBtn) {
    submitBtn.addEventListener("click", calculateMonthlyWorkHours);
}
function calculateMonthlyWorkHours() {
    var userSelect = document.querySelector("#user-select");
    var selectedUserName = userSelect.value;
    var selectedUser = userArray.find(function (user) { return user.userName === selectedUserName; });
    if (selectedUser) {
        var entranceInput = document.querySelector("#entrance-input");
        var exitInput = document.querySelector("#exit-input");
        var monthDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        var monthlyWorkHours = selectedUser.getMonthlyWorkHours(entranceInput.value, exitInput.value, monthDays);
        var resultDiv = document.querySelector("#result");
        resultDiv.textContent = "Monthly work hours for " + selectedUserName + ": " + monthlyWorkHours;
    }
}
// function displayUserWorkHours(){
//     const userSelect = document.querySelector("#user-select") as HTMLSelectElement;
//     const selectedUserName = userSelect.value;
//     const resultDiv = document.querySelector("#result") as HTMLDivElement;
//     if(selectedUserName) {
//         const user = userArray.find((u) => u.userName === selectedUserName);
//         if (user) {
//             const totalWorkHours = user.getTotalWorkHours();
//             resultDiv.textContent = `User: ${selectedUserName}, Total hours worked:${totalWorkHours}`
//         }
//     }else {
//         resultDiv.textContent = "";
//     }
// }
=======
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
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
