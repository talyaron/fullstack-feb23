var loginBox = document.querySelector(".loginBox");
var userBlock = document.querySelector(".userBlock");
var User = /** @class */ (function () {
    function User(username, password, name, hours) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.hours = hours;
    }
    return User;
}());
var currentTime = 0;
var benny = new User("benny3135", "benny45", "בנימין וולודרסקי", 0);
var noam = new User("noam3135", "noam45", "נועם וולודרסקי", 0);
var avram = new User("avram3135", "avram45", "אברהם וולודרסקי", 0);
var daniel = new User("daniel3135", "daniel45", "דניאל וולודרסקי", 0);
var usersArr = [];
usersArr.push(benny, noam, avram, daniel);
var m = 0;
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var tryusername = ev.target.userName.value;
        var trypassword = ev.target.password.value;
        var success = false;
        for (var i = 0; i < usersArr.length; i++) {
            var user = usersArr[i];
            if (user.username === tryusername && user.password === trypassword) {
                success = true;
                m = i;
                break;
            }
        }
        if (success) {
            var successTxt = "ההתחברות בוצעה בהצלחה!";
            if (loginBox) {
                loginBox.innerHTML = successTxt;
            }
            if (userBlock) {
                userBlock.style.display = "flex";
            }
            handleHours(usersArr[m]);
        }
        else {
            var errorTxt = "שם משתמש או סיסמה שגויים!";
            if (loginBox) {
                loginBox.innerHTML = errorTxt;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
// create the hours form and send the input to handleTime
function handleHours(user) {
    var welcomeHtml = "<h2 id=\"headLil\">" + user.name + " \u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0</h2>";
    userBlock.innerHTML += welcomeHtml;
    var hoursFromHtml = "<form onsubmit=\"handleTime(event)\">\n  <input type=\"submit\" name=\"submit\" placeholder=\"\u05D4\u05D6\u05DF\">\n  <label for=\"start\">start</label>\n  <input type=\"time\" name=\"start\" placeholder=\"\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF\">\n  <label for=\"end\">end</label>\n  <input type=\"time\" name=\"end\" placeholder=\"\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF\">\n</form>";
    userBlock.innerHTML += hoursFromHtml;
}
// getting the input from handleHours and returning the data
function handleTime(ev) {
    ev.preventDefault();
    var stratTime = ev.target.start.value;
    var endtime = ev.target.end.value;
    var totalTime = convertToHourFormat(modifyHourFormat(endtime) - modifyHourFormat(stratTime));
    var hoursHTML = "<p >\u05E9\u05E2\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4:" + stratTime + "</p>\n  <p >\u05E9\u05E2\u05EA \u05D9\u05E6\u05D9\u05D0\u05D4:" + endtime + "</p>\n  <p >\u05E2\u05D1\u05D3\u05EA \u05D4\u05D9\u05D5\u05DD:" + totalTime + " \u05E9\u05E2\u05D5\u05EA</p>";
    userBlock.innerHTML += hoursHTML;
    return modifyHourFormat(totalTime);
}
// convert hour format to calculatble number format
function modifyHourFormat(hourFormat) {
    var _a = hourFormat.split(":"), hourStr = _a[0], minuteStr = _a[1];
    var hour = parseInt(hourStr, 10);
    var minute = parseInt(minuteStr, 10);
    return hour + minute / 60;
}
// convert calculatble number to hour format format
function convertToHourFormat(hourNumber) {
    var hour = Math.floor(hourNumber);
    var minute = Math.round((hourNumber - hour) * 60);
    var hourStr = hour.toString().padStart(2, "0");
    var minuteStr = minute.toString().padStart(2, "0");
    return hourStr + ":" + minuteStr;
}
