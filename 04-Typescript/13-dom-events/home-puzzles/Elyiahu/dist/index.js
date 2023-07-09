var audio = new Audio("./dist/Knock Door - QuickSounds.com.mp3");
var box = document.querySelector("#box");
if (box)
    box.addEventListener("click", xx);
function xx() {
    audio.play();
}
