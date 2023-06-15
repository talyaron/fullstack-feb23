class Player {
    width: number;
    position: any;
    height: number;
    offset: { x: number; y: number; };
    constructor({ position, offset = { x: 0, y: 0 } }) {
        this.position = position;
        this.width = 80;
        this.height = 80;
        this.offset = offset; 
    }
}

const player = document.querySelector('#player') as HTMLElement;
const player1 = new Player({ position: { x: 0, y: 0 } });

function updatePlayer() {
    player.style.top = `${player1.position.y}px`;
    player.style.left = `${player1.position.x}px`;
    player.style.width = `${player1.width}px`;
    player.style.height = `${player1.height}px`;
    //console.log(player1.position);
    
}

function update() {
    updatePlayer();
    requestAnimationFrame(update);
}
update();

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player1.position.y -= 10;
            break;
        case 'ArrowDown':
            player1.position.y += 10;
            break;
        case 'ArrowLeft':
            player1.position.x -= 10;
            break;
        case 'ArrowRight':
            player1.position.x += 10;
            break;
    }
    updatePlayer();
});

function red(){
player.addEventListener('click', () => {
    player.style.backgroundColor = 'red';
})};

