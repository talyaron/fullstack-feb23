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
        var life = document.querySelector('#container__life');
        var img = "<img id=\"s\" class=\"b\" src=\"" + player.playerImg + "\"> <img id=\"f\" class=\"b\" src=\"" + player.playerImg + "\"> <img id=\"c\" class=\"b\" src=\"" + player.playerImg + "\">";
        life.innerHTML = img;
    }
    catch (error) {
        console.error(error);
    }
}
// const ball = document.querySelector("canvas") as HTMLCanvasElement;
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
setInterval(updatePosition, 10);
function updatePosition() {
    var playerLocation = bart.getBoundingClientRect();
    var playerLocationTop = playerLocation.top;
    var playerLocationLeft = playerLocation.left;
    shoot.style.top = playerLocationTop + "px";
    shoot.style.left = playerLocationLeft + "px";
}
var ball = document.querySelector("#container__ball");
var container = document.querySelector("#container");
var ballX = 0;
var ballY = 0;
var ballSpeedX = 2;
var ballSpeedY = 2;
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var ballSize = ball.offsetWidth;
    if (ballX + ballSize >= containerWidth || ballX <= 0) {
        ballSpeedX *= -1;
    }
    if (ballY + ballSize >= containerHeight || ballY <= 0) {
        ballSpeedY *= -1;
    }
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
    requestAnimationFrame(moveBall);
}
moveBall();
setInterval(up, 10);
function up() {
    var playerLocation = bart.getBoundingClientRect();
    var ballLocation = ball.getBoundingClientRect();
    if (playerLocation.right > ballLocation.left &&
        playerLocation.left < ballLocation.right &&
        playerLocation.bottom > ballLocation.top &&
        playerLocation.top < ballLocation.bottom) {
        console.log('התנגשות בין div1 ל-div2');
    }
}
setInterval(u, 10);
function u() {
    var ropeLocation = shoot.getBoundingClientRect();
    var ballLocation = ball.getBoundingClientRect();
    if (ropeLocation.right > ballLocation.left &&
        ropeLocation.left < ballLocation.right &&
        ropeLocation.bottom > ballLocation.top &&
        ropeLocation.top < ballLocation.bottom) {
        console.log('התנגשות בין div1 ל-div2');
    }
}
