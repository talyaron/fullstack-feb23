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
        var life_1 = document.querySelector('#container__life');
        var img = "<img id=\"s\" class=\"b\" src=\"" + player.playerImg + "\"> <img id=\"f\" class=\"b\" src=\"" + player.playerImg + "\"> <img id=\"c\" class=\"b\" src=\"" + player.playerImg + "\">";
        life_1.innerHTML = img;
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
function updateTargetPosition() {
    var sourceRect = bart.getBoundingClientRect();
    var targetRect = shoot.getBoundingClientRect();
    var offsetX = sourceRect.left - targetRect.left;
    var offsetY = sourceRect.top - targetRect.top;
    shoot.style.left = parseFloat(getComputedStyle(shoot).left) + offsetX + 'px';
    shoot.style.top = parseFloat(getComputedStyle(shoot).top) + offsetY + 'px';
}
// בדיקת מיקום ה-DIV המקור ועדכון מיקום ה-DIV היעד בכל שינוי
setInterval(updateTargetPosition, 100);
var container = document.querySelector('#container');
var ball = document.querySelector('#container__ball');
var life = document.querySelector('#container__life');
var images = life.querySelectorAll('.b');
var collisionCount = 0;
var gameEnded = false;
var ballX = 0;
var ballY = 0;
var ballSpeedX = 5;
var ballSpeedY = 5;
var canMoveBall = true;
function moveBall() {
    if (gameEnded) {
        return;
    }
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
function handleCollision() {
    if (collisionCount >= 3) {
        // console.log("המשחק נגמר");
        gameEnded = true;
        return;
    }
    var playerLocation = bart.getBoundingClientRect();
    var ballLocation = ball.getBoundingClientRect();
    if (playerLocation.right > ballLocation.left &&
        playerLocation.left < ballLocation.right &&
        playerLocation.bottom > ballLocation.top &&
        playerLocation.top < ballLocation.bottom) {
        var imageToRemove = images[collisionCount];
        if (imageToRemove) {
            life.removeChild(imageToRemove);
        }
        collisionCount++;
        if (collisionCount === 1) {
            canMoveBall = false;
            setTimeout(function () {
                canMoveBall = true;
            }, 1000);
        }
        else if (collisionCount === 2) {
            canMoveBall = false;
            setTimeout(function () {
                canMoveBall = true;
            }, 1000);
        }
        else if (collisionCount === 3) {
            gameEnded = true;
            life.classList.add("none");
            bart.classList.add("none");
            shoot.classList.add("none");
            ball.classList.add("none");
            var gameOver = document.querySelector('#container__gameOver');
            var html = " <h1>game over</h1> <br>  <a href=\"/levels.html\">back</a>";
            gameOver.innerHTML = html;
        }
    }
}
setInterval(function () {
    if (canMoveBall) {
        handleCollision();
    }
}, 10);
setInterval(u, 10);
function u() {
    var ropeLocation = shoot.getBoundingClientRect();
    var ballLocation = ball.getBoundingClientRect();
    if (ropeLocation.right > ballLocation.left &&
        ropeLocation.left < ballLocation.right &&
        ropeLocation.bottom > ballLocation.top &&
        ropeLocation.top < ballLocation.bottom) {
        ball.style.display = 'none';
        // יצירת שני כדורים קטנים
        var smallBall1 = document.createElement('div');
        smallBall1.className = 'small-ball';
        smallBall1.style.width = '50px';
        smallBall1.style.height = '50px';
        smallBall1.style.borderRadius = '50%';
        smallBall1.style.background = 'red';
        var smallBall2 = document.createElement('div');
        smallBall2.className = 'small-ball';
        smallBall2.style.width = '50px';
        smallBall2.style.height = '50px';
        smallBall2.style.borderRadius = '50%';
        smallBall2.style.background = 'blue';
        container.appendChild(smallBall1);
        container.appendChild(smallBall2);
    }
}
