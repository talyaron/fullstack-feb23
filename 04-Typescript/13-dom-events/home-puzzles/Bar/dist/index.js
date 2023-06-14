// 1) create boxes on the screen.
var box = document.querySelector("#box");
var audio = document.querySelector("#audio");
// when clicking on a button, play sound.
box === null || box === void 0 ? void 0 : box.addEventListener("click", function () {
    audio.play();
});
//
// 2) Create images of calm faces on the screen.
var clowns = document.querySelector("#clowns");
// When clicked, change the face into to a frighting clown.
clowns === null || clowns === void 0 ? void 0 : clowns.addEventListener("mousedown", function (ev) {
    ev.target.style.backgroundImage = "url(./dist/src/scery_clown.jpg)";
    ev.target.style.backgroundSize = "cover";
});
// when the mouse leaves, change back to the nice face.
clowns === null || clowns === void 0 ? void 0 : clowns.addEventListener("mouseup", function (ev) {
    ev.target.style.backgroundImage = "url(./dist/src/nice_clown.webp)";
    ev.target.style.backgroundSize = "cover";
});
// 3) Create images of dogs on the screen. when the mouse leave the dog,
// the dog follows the mouse.
var follower = document.querySelector("#followers");
document.addEventListener("mousemove", function (ev) {
    var mouseX = ev.clientX;
    var mouseY = ev.clientY;
    // Set the element's position to follow the mouse
    followers.style.left = mouseX + "px";
    followers.style.top = mouseY + "px";
});
