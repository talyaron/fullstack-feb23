// 1) create boxes on the screen. when clicking on a button, play sound.
// creating two diffrent divs 
var div = document.createElement('div');
var div1 = document.createElement('div');
// creating a new element called 'box'
var box = document.createElement('div');
// making the element box to be a class in every div
div.classList.add('box');
div1.classList.add('box');
// rendering the divs to the dom
document.body.append(div);
document.body.append(div1);
// selecting elements from their IDs
var mySound = document.querySelector('#mySound');
var mySoundTwo = document.querySelector('#mySoundTwo');
// modifing the playSound function to play or stop the sound based on its current state
function playSound() {
    if (mySound.paused) {
        mySound.play();
    }
    else {
        mySound.pause();
        mySound.currentTime = 0;
    }
}
// modifing the playSoundTwo function to play or stop the sound based on its current state
function playSoundTwo() {
    if (mySoundTwo.paused) {
        mySoundTwo.play();
    }
    else {
        mySoundTwo.pause();
        mySoundTwo.currentTime = 0;
    }
}
div.onclick = playSound;
div1.onclick = playSoundTwo;
// const stopIcon = document.createElement('i');
// stopIcon.classList.add('stop-icon', 'fa', 'fa-pause');
// box.append(stopIcon)
// const playIcon = document.createElement('i');
// playIcon.classList.add('play-icon', 'fa', 'fa-play');
// box.append(playIcon)
// function toggleOne(){
//     mySound.paused ? mySound.play() : mySound.pause();
//     box.classList.toggle('playing')
// }
// function toggleTwo() {
//     mySoundTwo.paused ? mySoundTwo.play() : mySoundTwo.pause();
//     box.classList.toggle('playing')
// }
// console.log()
// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
