

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
setInterval(updatePosition, 10);

function updatePosition() {
    const playerLocation = bart.getBoundingClientRect();
    const playerLocationTop = playerLocation.top;
    const playerLocationLeft = playerLocation.left;

    shoot.style.top = `${playerLocationTop}px`;
    shoot.style.left = `${playerLocationLeft}px`;
}


const ball = document.querySelector(`#container__ball`) as HTMLElement;
const container = document.querySelector(`#container`) as HTMLElement;

let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;


function moveBall() {
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


setInterval(up, 10);

function up() {
    const playerLocation = bart.getBoundingClientRect();
    const ballLocation = ball.getBoundingClientRect();
    if (
        playerLocation.right > ballLocation.left &&
        playerLocation.left < ballLocation.right &&
        playerLocation.bottom > ballLocation.top &&
        playerLocation.top < ballLocation.bottom
    ) {
        console.log('התנגשות בין div1 ל-div2');
    }
}

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

