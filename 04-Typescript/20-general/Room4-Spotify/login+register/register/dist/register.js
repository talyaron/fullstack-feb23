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
var submitButton = document.querySelector("#registerSubmit");
var passwordINS = document.querySelector("#passwordINS");
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(function (el) { return observer.observe(el); });
// ---------------------------
// this function checks that the password don't contain just numbers
function containsLetters(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        if (/[A-Za-z]/.test(inputString[i])) {
            return true;
        }
    }
    return false;
}
//   -------------------------
function passwordCheck(event) {
    event.preventDefault();
    var currentPassword = event.target.value;
    if (currentPassword.length >= 8 && containsLetters(currentPassword)) {
        submitShow();
    }
    else {
        submitHide();
    }
}
function submitShow() {
    submitButton.style.opacity = "1";
    passwordINS.style.display = "none";
}
function submitHide() {
    submitButton.style.opacity = "0";
    passwordINS.style.display = "block";
}
<<<<<<< Updated upstream:04-Typescript/20-general/Room4-Spotify/login+register/register/dist/register.js
function redirectPage() {
    window.location.href = "../redirect/redirect.html";
    redirectToMain();
}
function redirectToMain() {
    window.location.href = "../main/main.html";
=======
// ----------------------------
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
var profiles = localStorage.getItem("profiles");
var profilesArr = JSON.parse(profiles);
function registerProfile(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var username = ev.target.username.value;
        var password = ev.target.password.value;
        profilesArr.push(new profile((profilesArr.length + 1), firstName, lastName, username, password));
        storeProfile();
    }
    catch (error) {
        console.error(error);
    }
}
function storeProfile() {
    var profilesArrSTR = JSON.stringify(profilesArr);
    localStorage.setItem("profiles", profilesArrSTR);
    var selectedProfile = JSON.stringify(profilesArr.length + 1);
    localStorage.setItem("selectedProfileId", selectedProfile);
    redirectToMain();
    redirectToMain();
}
function redirectToMain() {
    window.location.href = "mainPage.html";
>>>>>>> Stashed changes:04-Typescript/20-general/Room4-Spotify/login+register/dist/registerCode.js
}
