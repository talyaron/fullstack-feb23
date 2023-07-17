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
// setInterval(updatePosition, 10);
// function updatePosition() {
//     const playerLocation = bart.getBoundingClientRect();
//     const playerLocationTop = playerLocation.top;
//     const playerLocationLeft = playerLocation.left;
//     shoot.style.top = `${playerLocationTop}px`;
//     shoot.style.left = `${playerLocationLeft}px`;
// }
// קביעת אלמנטים DIV
// עדכון מיקום ה-DIV היעד לפי מיקום ה-DIV המקור
// קביעת אלמנטים DIV
// const sourceDiv = document.getElementById('source-div');
// const shoot = document.getElementById('target-div');
// בדיקת מיקום ה-DIV המקור ועדכון מיקום ה-DIV היעד בכל שינוי
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
// const ball = document.querySelector(`#container__ball`) as HTMLElement;
// const container = document.querySelector(`#container`) as HTMLElement;
// let ballX = 0;
// let ballY = 0;
// let ballSpeedX = 5;
// let ballSpeedY = 5;
// let shouldStop = false;
// function moveBall() {
//     ballX += ballSpeedX;
//     ballY += ballSpeedY;
//     const containerWidth = container.offsetWidth;
//     const containerHeight = container.offsetHeight;
//     const ballSize = ball.offsetWidth;
//     if (ballX + ballSize >= containerWidth || ballX <= 0) {
//         ballSpeedX *= -1;
//     }
//     if (ballY + ballSize >= containerHeight || ballY <= 0) {
//         ballSpeedY *= -1;
//     }
//     ball.style.left = ballX + 'px';
//     ball.style.top = ballY + 'px';
//     requestAnimationFrame(moveBall);
// }
// moveBall();
// setInterval(up, 10);
// function up() {
//     const playerLocation = bart.getBoundingClientRect();
//     const ballLocation = ball.getBoundingClientRect();
//     if (
//         playerLocation.right > ballLocation.left &&
//         playerLocation.left < ballLocation.right &&
//         playerLocation.bottom > ballLocation.top &&
//         playerLocation.top < ballLocation.bottom
//     ) {
//         const life = document.querySelector('#container__life') as HTMLElement;
//         const images = life.querySelectorAll('.b');
//         if (images.length > 0) {
//             const imageToRemove = images[0];
//             life.removeChild(imageToRemove);
//         }
//         console.log("l")
//     }
// }
var container = document.querySelector("#container");
var ball = document.querySelector('#container__ball');
var player = document.querySelector('#player');
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
        console.log("המשחק נגמר");
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
            console.log("המשחק נגמר");
            gameEnded = true;
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
        console.log('התנגשות בין div1 ל-div2');
    }
}
