

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
setInterval(updatePosition, 10);

function updatePosition() {
    const playerLocation = bart.getBoundingClientRect();
    const playerLocationTop = playerLocation.top;
    const playerLocationLeft = playerLocation.left;

    shoot.style.top = `${playerLocationTop}px`;
    shoot.style.left = `${playerLocationLeft}px`;
}








// const context = ball.getContext("2d") as CanvasRenderingContext2D;
// let x = 200
// let y = 300
// const FPS = 100;
// const radius = 50;
// let xSpeed = 1;
// let ySpeed = 2;
// // setInterval(s, 10);
// // function s(){
// // console.log(getDistance(200, 300))}
// function clear() {
//     context.clearRect(0, 0, ball.width, ball.height)
// }


// function draw() {
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI)
//     context.closePath();
//     context.fillStyle = "red";
//     context.fill();

// }

// function update() {
//     x = x + xSpeed;
//     y = y + ySpeed;
//     const borderRight = (x + radius >= ball.width);
//     const borderLeft = (x - radius <= 0);
//     const borderUp = (y + radius >= ball.height);
//     const borderDown = (y - radius <= 0);
//     if (borderRight) {
//         x = ball.width - radius
//         xSpeed = -xSpeed
//     }
//     if (borderLeft) {
//         x = 0 + radius
//         xSpeed = -xSpeed
//     }
//     if (borderUp) {
//         y = ball.height - radius
//         ySpeed = -ySpeed
//     }
//     if (borderDown) {
//         y = 0 + radius
//         ySpeed = -ySpeed
//     }

// }

// function animation() {
//     clear()
//     draw()
//     update()
// }
// window.setInterval(animation, 1000 / FPS)
// console.log(x + radius + FPS)

// function getDistance(x, y) {
//     const playerLocation = bart.getBoundingClientRect();
//     const playerLocationTop = playerLocation.top;
//     const playerLocationLeft = playerLocation.left;
//     let xDistance = x - playerLocationLeft;
//     let yDistance = y - playerLocationTop;
//     return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

// }
const ball = document.querySelector(`#container__ball`) as HTMLElement;
const container = document.querySelector(`#container`) as HTMLElement;

let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;

// תנועת הכדור בתוך ה-DIV
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const ballSize = ball.offsetWidth;

    if (ballX + ballSize >= containerWidth || ballX <= 0) {
        ballSpeedX *= -1;
    }

    if (ballY + ballSize >= containerWidth || ballY <= 0) {
        ballSpeedY *= -1;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    requestAnimationFrame(moveBall);
}

// הפעלת תנועת הכדור בתוך ה-DIV
moveBall();
