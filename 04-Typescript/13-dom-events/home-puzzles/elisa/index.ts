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
const image = document.getElementById('image') as HTMLImageElement;

// Store the paths for the two images
const firstImagePath = './dist/audio/calmface.jpg';
const secondImagePath = './dist/audio/angryface.jpg';

// Function to change the image source
function changeImage() {
  if (image.src.endsWith(firstImagePath)) {
    image.src = secondImagePath;
  } else {
    image.src = firstImagePath;
  }
}

// Add event listeners for click and mouseleave
image.addEventListener('click', changeImage);
image.addEventListener('mouseleave', changeImage);

// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
