var profile = /** @class */ (function () {
    function profile(id, firstName, lastName, username, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }
    return profile;
}());
var profilesArr = [];
function registerProfile(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var username = ev.target.username.value;
        var password = ev.target.password.value;
        profilesArr.push(new profile((profilesArr.length + 1), firstName, lastName, username, password));
        console.log(profilesArr);
        storeProfile();
    }
    catch (error) {
        console.error(error);
    }
}
function storeProfile() {
    var profilesArrSTR = JSON.stringify(profilesArr);
    localStorage.setItem("profiles", profilesArrSTR);
    redirectPage();
}
