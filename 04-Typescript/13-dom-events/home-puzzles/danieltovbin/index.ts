// 1) create boxes on the screen. when clicking on a button, play sound.
// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.



const div = document.createElement('div') as HTMLDivElement;
const box = document.createElement('div') as HTMLDivElement;
div.classList.add('box')
document.body.append(div)

const div1 = document.createElement('div') as HTMLDivElement;
div1.classList.add('box')
document.body.append(div1)


const mySound = document.querySelector('#mySound') as HTMLAudioElement;
const mySoundTwo = document.querySelector('#mySoundTwo') as HTMLAudioElement;

div.onclick = playSound;
div1.onclick = playSoundTwo;


function playSound() {
    mySound.play();
}

function playSoundTwo () {
    mySoundTwo.play();
}

const stopIcon = document.createElement('i');
stopIcon.classList.add('stop-icon', 'fa', 'fa-pause');
box.append(stopIcon)

const playIcon = document.createElement('i');
playIcon.classList.add('play-icon', 'fa', 'fa-play');
box.append(playIcon)

function toggleOne(){
    mySound.paused ? mySound.play() : mySound.pause();
    box.classList.toggle('playing')
}

function toggleTwo() {
    mySoundTwo.paused ? mySoundTwo.play() : mySoundTwo.pause();
    box.classList.toggle('playing')
}