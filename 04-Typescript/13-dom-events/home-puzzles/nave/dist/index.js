// // 1) create boxes on the screen. when clicking on a button, play sound.
// // 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// // 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
// function playAudio():void {
//     // const audio = document.querySelector(".myAudio");
//     audio?.play();
//   }
var boxs = document.querySelectorAll(".box");
console.log(boxs);
var audio_link = new Audio("./sound.mp3");
// const sounds = {sound1:new Audio('./sound.mp3')}
if (boxs) {
    boxs.forEach(function (box) {
        console.dir(box);
        box.style.backgroundColor = "red";
        box.addEventListener("click", function () { audio_link.play(); });
    });
}
