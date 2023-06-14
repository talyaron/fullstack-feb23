// // 1) create boxes on the screen. when clicking on a button, play sound.
// // 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// // 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
// function playAudio():void {
//     // const audio = document.querySelector(".myAudio");
//     audio?.play();
//   }
var audios = document.querySelectorAll(".myAudio");
var audio_link = new Audio("./27300490_city-day-san-francisco-constant-1_by_prosoundfx_preview.mp3");
audios.forEach(function (audio) {
    audio.addEventListener("click", function () { audio_link.play(); });
});
