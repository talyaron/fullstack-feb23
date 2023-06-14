var playMusic = new Audio("audio.mp3");
var boxes = document.querySelectorAll('.box');
console.log(boxes);
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        playMusic.play();
        // ev.target.style.backgroundColor = getRandomColor();
    });
});
// function playMusic() {
//     let audio = new Audio("audio.mp3");
//     audio.play()
//     return Audio
// }
// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()* 16)];
//     }
//     return color;
// }
