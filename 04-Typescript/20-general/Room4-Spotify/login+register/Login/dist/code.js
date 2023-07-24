var usernnameBar = document.querySelector(".signIn__userName");
var passwordBar = document.querySelector(".signIn__password");
var keyboardSound1 = new Audio("../dist/media/type effect 1.mp3");
var keyboardSound2 = new Audio("../dist/media/type effect 2.mp3");
usernnameBar.addEventListener("keypress", function (ev) {
    keyboardSound1.play();
});
passwordBar.addEventListener("keypress", function (ev) {
    keyboardSound2.play();
});
function register() {
    window.location.href = "../register/registerPage.html";
}
function handleProfile(ev) {
    try {
        ev.preventDefault();
        var tryUserName = ev.target.userName.value;
        var tryPassword = ev.target.Password.value;
        profileCheck(tryUserName, tryPassword);
    }
    catch (error) {
        console.error(error);
    }
}
function profileCheck(tryUserName, tryPassword) {
    var profiles = localStorage.getItem("profiles");
    var profilesSTR = JSON.parse(profiles);
    profilesSTR.forEach(function (prof) {
        if (prof.username === tryUserName && prof.password === tryPassword) {
            return prof.id;
        }
    });
}
