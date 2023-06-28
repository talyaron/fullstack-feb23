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
                break;
            }
        }
        if (success) {
            var successTxt = "ההתחברות בוצעה בהצלחה!";
            if (loginBox) {
                loginBox.innerHTML = successTxt;
            }
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
var loginBox = document.querySelector(".loginBox");
// Rest of the code remains the same
var User = /** @class */ (function () {
    function User(username, password, name, hours) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.hours = hours;
    }
    return User;
}());
var usersArr = [];
var benny = new User("benny3135", "benny45", "בנימין וולודרסקי", 0);
var noam = new User("noam3135", "noam45", "נועם וולודרסקי", 0);
var avram = new User("avram3135", "avram45", "אברהם וולודרסקי", 0);
var daniel = new User("daniel3135", "daniel45", "דניאל וולודרסקי", 0);
usersArr.push(benny, noam, avram, daniel);
