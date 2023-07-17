

getPlayerFromLocalStorage()
function getPlayerFromLocalStorage() {
    try {
        const playersStorage = localStorage.getItem('players');
        if (!playersStorage) return [];
        const playersArray = JSON.parse(playersStorage);
        renderPlayers(playersArray[0])
    } catch (error) {
        console.error(error);
        return [];
    }

}

function renderPlayers(player) {
    try {
        const rootPlayer = document.querySelector('#container__player') as HTMLElement;
        const html =
            `<img class="bart" src="${player.playerImg}"> `;

        rootPlayer.innerHTML = html;
        const life = document.querySelector('#container__life') as HTMLElement;
        const img = `<img id="s" class="b" src="${player.playerImg}"> <img id="f" class="b" src="${player.playerImg}"> <img id="c" class="b" src="${player.playerImg}">`
        life.innerHTML = img;
    } catch (error) {
        console.error(error);
    }
}



// const ball = document.querySelector("canvas") as HTMLCanvasElement;
const bart = document.querySelector(`.bart`) as HTMLElement;
const shoot = document.querySelector(`#container__shoot`) as HTMLElement;
document.addEventListener('keydown', (event: KeyboardEvent) => {
    event.stopPropagation();
    switch (event.key) {
        case 'ArrowLeft':
            bart.style.left = `${bart.offsetLeft - 25}px`;
            break;
        case 'ArrowRight':
            bart.style.left = `${bart.offsetLeft + 25}px`;
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
    const sourceRect = bart.getBoundingClientRect();
    const targetRect = shoot.getBoundingClientRect();

    const offsetX = sourceRect.left - targetRect.left;
    const offsetY = sourceRect.top - targetRect.top;

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

const container = document.querySelector(`#container`) as HTMLElement;
const ball = document.querySelector('#container__ball') as HTMLElement;
const player = document.querySelector('#player') as HTMLElement;
const life = document.querySelector('#container__life') as HTMLElement;
const images = life.querySelectorAll('.b');
let collisionCount = 0;
let gameEnded = false;

let ballX = 0;
let ballY = 0;
let ballSpeedX = 5;
let ballSpeedY = 5;
let canMoveBall = true;

function moveBall() {
    if (gameEnded) {
        return;
    }

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const ballSize = ball.offsetWidth;

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

    const playerLocation = bart.getBoundingClientRect();
    const ballLocation = ball.getBoundingClientRect();

    if (
        playerLocation.right > ballLocation.left &&
        playerLocation.left < ballLocation.right &&
        playerLocation.bottom > ballLocation.top &&
        playerLocation.top < ballLocation.bottom
    ) {
        const imageToRemove = images[collisionCount];
        if (imageToRemove) {
            life.removeChild(imageToRemove);
        }

        collisionCount++;

        if (collisionCount === 1) {
            canMoveBall = false;
            setTimeout(() => {
                canMoveBall = true;
            }, 1000);
        } else if (collisionCount === 2) {
            canMoveBall = false;
            setTimeout(() => {
                canMoveBall = true;
            }, 1000);
        } else if (collisionCount === 3) {
            console.log("המשחק נגמר");
            gameEnded = true;
        }

    }
}

setInterval(() => {
    if (canMoveBall) {
        handleCollision();
    }
}, 10);








































setInterval(u, 10);

function u() {
    const ropeLocation = shoot.getBoundingClientRect();
    const ballLocation = ball.getBoundingClientRect();
    if (
        ropeLocation.right > ballLocation.left &&
        ropeLocation.left < ballLocation.right &&
        ropeLocation.bottom > ballLocation.top &&
        ropeLocation.top < ballLocation.bottom
    ) {
        console.log('התנגשות בין div1 ל-div2');
    }
}

