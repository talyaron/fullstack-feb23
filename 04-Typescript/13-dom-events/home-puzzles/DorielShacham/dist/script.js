// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
var dogs = document.querySelectorAll('.dog');
dogs.forEach(moveDogRandomly);
setInterval(function () {
    dogs.forEach(moveDogRandomly);
}, 6000);
function moveDogRandomly(dog) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = getRandomNumber(0, screenWidth - dog.offsetWidth);
    var randomY = getRandomNumber(0, screenHeight - dog.offsetHeight);
    dog.style.left = randomX + "px";
    dog.style.top = randomY + "px";
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function sound(surl) {
    dogs.innerHTML =
        "<embed src=" + surl + " hidden=true autostart=true loop=false>";
}
