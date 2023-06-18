// Get the button element
var playButton = document.getElementById("playButton");
// Define the function to play the sound
function playSound() {
    var audio = new Audio("./dist/Evil-Laugh-A1-www.fesliyanstudios.com.mp3");
    // Replace "path/to/your/sound.mp3" with the actual path to your sound file.
    audio.play();
}
// Attach the click event listener to the button
playButton.addEventListener("click", playSound);
