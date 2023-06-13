//1
var audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
var box = document.querySelectorAll(".box");
box.forEach(function (box) {
    box.addEventListener("click", function (ev) {
        ev.target.style.backgroundColor = "red";
        audio.play();
    });
});
