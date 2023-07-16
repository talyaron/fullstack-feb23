getPlayerFromLocalStorage();
function getPlayerFromLocalStorage() {
    try {
        var playersStorage = localStorage.getItem('players');
        if (!playersStorage)
            return [];
        var playersArray = JSON.parse(playersStorage);
        renderPlayers(playersArray[0]);
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderPlayers(player) {
    try {
        var rootPlayer = document.querySelector('#container__player');
        var html = "<img class=\"bart\" src=\"" + player.playerImg + "\"> ";
        rootPlayer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var bart = document.querySelector(".bart");
var shoot = document.querySelector("#container__shoot");
document.addEventListener('keydown', function (event) {
    event.stopPropagation();
    switch (event.key) {
        case 'ArrowLeft':
            bart.style.left = bart.offsetLeft - 25 + "px";
            break;
        case 'ArrowRight':
            bart.style.left = bart.offsetLeft + 25 + "px";
            break;
    }
});
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
function handleKeyDown(event) {
    if (event.key === ' ') {
        shoot.classList.add('show');
    }
}
function handleKeyUp(event) {
    if (event.key === ' ') {
        shoot.classList.remove('show');
    }
}
var ball = document.querySelector("canvas");
var context = ball.getContext("2d");
var x = 200;
var y = 300;
var FPS = 100;
var radius = 50;
var xSpeed = 1;
var ySpeed = 2;
function clear() {
    context.clearRect(0, 0, ball.width, ball.height);
}
function draw() {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = "red";
    context.fill();
}
function update() {
    x = x + xSpeed;
    y = y + ySpeed;
    var borderRight = (x + radius >= ball.width);
    var borderLeft = (x - radius <= 0);
    var borderUp = (y + radius >= ball.height);
    var borderDown = (y - radius <= 0);
    if (borderRight) {
        x = ball.width - radius;
        xSpeed = -xSpeed;
    }
    if (borderLeft) {
        x = 0 + radius;
        xSpeed = -xSpeed;
    }
    if (borderUp) {
        y = ball.height - radius;
        ySpeed = -ySpeed;
    }
    if (borderDown) {
        y = 0 + radius;
        ySpeed = -ySpeed;
    }
}
function animation() {
    clear();
    draw();
    update();
}
window.setInterval(animation, 1000 / FPS);
