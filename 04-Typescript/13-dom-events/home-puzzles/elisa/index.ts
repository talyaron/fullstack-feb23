// 1) create boxes on the screen. when clicking on a button, play sound.

// Create a function to play the sound when the button is clicked
function playSound() {
  const audio = new Audio('./dist/audio/coldplay_clocks.mp3');
  audio.play();
}

// Get the play button element
const playButton = document.getElementById('playButton');

// Add an event listener to the button to play the sound when clicked
playButton?.addEventListener('click', playSound);

// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// Get the image element
const image = document.getElementById('myImage') as HTMLImageElement;

function changeImage() {
  image.src = './dist/audio/angryface.jpg';
}

function revertImage() {
  image.src = './dist/audio/calmface.jpg';
}

image.addEventListener('click', changeImage);
image.addEventListener('mousemove', revertImage);
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
