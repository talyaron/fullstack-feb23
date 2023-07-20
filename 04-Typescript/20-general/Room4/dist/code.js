var usernnameBar = document.querySelector(".signIn__userName");
var passwordBar = document.querySelector(".signIn__password");
var keyboardSound1 = new Audio("./dist/type effect 1.mp3");
var keyboardSound2 = new Audio("./dist/type effect 2.mp3");
usernnameBar.addEventListener("keypress", function (ev) {
    keyboardSound1.play();
});
passwordBar.addEventListener("keypress", function (ev) {
    keyboardSound2.play();
});
function register() {
    window.location.href = "registerPage.html";
}
