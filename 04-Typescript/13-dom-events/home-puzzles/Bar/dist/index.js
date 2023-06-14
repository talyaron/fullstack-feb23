// 1) create boxes on the screen.
// const box = document.querySelector(`#box`);
// const audio = document.querySelector(`#audio`) as HTMLAudioElement;
// // when clicking on a button, play sound.
// box?.addEventListener("click", () => {
//     audio.play();
// })
//
//
// 2) Create images of calm faces on the screen.//
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
//
// 1) create boxes on the screen.//
var audio = document.querySelector("#audio");
clowns === null || clowns === void 0 ? void 0 : clowns.addEventListener("click", function () {
    audio.play();
});
//
//
// 3) Create images of dogs on the screen. when the mouse leave the dog,
// the dog follows the mouse.//
// const follower = document.querySelector("#followers");
// document.addEventListener("mousemove", (ev) => {
//     const mouseX = ev.clientX;
//     const mouseY = ev.clientY;
//     followers.style.left = mouseX + "px";
//     followers.style.top = mouseY + "px";
// });
