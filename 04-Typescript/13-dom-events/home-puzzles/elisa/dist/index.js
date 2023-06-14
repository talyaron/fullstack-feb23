// 1) create boxes on the screen. when clicking on a button, play sound.
// Create a function to play the sound when the button is clicked
function playSound() {
    var audio = new Audio('./dist/audio/coldplay_clocks.mp3');
    audio.play();
}
// Get the play button element
var playButton = document.getElementById('playButton');
// Add an event listener to the button to play the sound when clicked
playButton === null || playButton === void 0 ? void 0 : playButton.addEventListener('click', playSound);
// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// Get the image element
var image = document.getElementById('image');
// Store the paths for the two images
var firstImagePath = './dist/audio/calmface.jpg';
var secondImagePath = './dist/audio/angryface.jpg';
// Function to change the image source
function changeImage() {
    if (image.src.endsWith(firstImagePath)) {
        image.src = secondImagePath;
    }
    else {
        image.src = firstImagePath;
    }
}
// Add event listeners for click and mouseleave
image.addEventListener('click', changeImage);
image.addEventListener('mouseleave', changeImage);
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
