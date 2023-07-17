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
        var container_1 = document.querySelector('#container');
        var smallBall1_1 = document.createElement('div');
        var smallBall2_1 = document.createElement('div');
        smallBall1_1.style.position = "absolute";
        smallBall2_1.style.position = "absolute";
        // smallBall2.style.margin = "20px"
        // Set up the properties for smallBall1
        smallBall1_1.className = 'small-ball';
        smallBall1_1.style.width = '50px';
        smallBall1_1.style.height = '50px';
        smallBall1_1.style.borderRadius = '50%';
        smallBall1_1.style.background = 'red';
        container_1.appendChild(smallBall1_1);
        // Set up the properties for smallBall2
        smallBall2_1.className = 'small-ball';
        smallBall2_1.style.width = '50px';
        smallBall2_1.style.height = '50px';
        smallBall2_1.style.borderRadius = '50%';
        smallBall2_1.style.background = 'blue';
        container_1.appendChild(smallBall2_1);
        // Set initial positions for the balls
        var smallBall1X_1 = 0;
        var smallBall1Y_1 = 0;
        var smallBall2X_1 = 0;
        var smallBall2Y_1 = 0;
        // Set initial speeds for the balls
        var smallBall1SpeedX_1 = 2;
        var smallBall1SpeedY_1 = 2;
        var smallBall2SpeedX_1 = 3;
        var smallBall2SpeedY_1 = 3;
        // Function to update the positions of the balls
        function updateBallsPosition() {
            var containerWidth = container_1.offsetWidth;
            var containerHeight = container_1.offsetHeight;
            var smallBallSize = smallBall1_1.offsetWidth;
            // Update the position of smallBall1
            smallBall1X_1 += smallBall1SpeedX_1;
            smallBall1Y_1 += smallBall1SpeedY_1;
            if (smallBall1X_1 + smallBallSize >= containerWidth || smallBall1X_1 <= 0) {
                smallBall1SpeedX_1 *= -1;
            }
            if (smallBall1Y_1 + smallBallSize >= containerHeight || smallBall1Y_1 <= 0) {
                smallBall1SpeedY_1 *= -1;
            }
            smallBall1_1.style.left = smallBall1X_1 + 'px';
            smallBall1_1.style.top = smallBall1Y_1 + 'px';
            // Update the position of smallBall2
            smallBall2X_1 += smallBall2SpeedX_1;
            smallBall2Y_1 += smallBall2SpeedY_1;
            if (smallBall2X_1 + smallBallSize >= containerWidth || smallBall2X_1 <= 0) {
                smallBall2SpeedX_1 *= -1;
            }
            if (smallBall2Y_1 + smallBallSize >= containerHeight || smallBall2Y_1 <= 0) {
                smallBall2SpeedY_1 *= -1;
            }
            smallBall2_1.style.left = smallBall2X_1 + 'px';
            smallBall2_1.style.top = smallBall2Y_1 + 'px';
            requestAnimationFrame(updateBallsPosition);
        }
        // Start updating the positions of the balls
        updateBallsPosition();
    }
}
