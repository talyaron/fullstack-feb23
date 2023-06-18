// var player = document.querySelector('.images') as HTMLDivElement;
var player;
var players = document.querySelectorAll('.player');
players.forEach(function (pl) {
    pl.addEventListener('click', function (ev) {
        player = ev.target;
        console.dir(player);
    });
});
document.addEventListener('keyup', function (event) {
    event.stopPropagation();
    console.dir(player);
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            player.style.top = player.offsetTop - 45 + "px";
            break;
        case 'ArrowDown':
            player.style.top = player.offsetTop + 45 + "px";
            break;
        case 'ArrowLeft':
            player.style.left = player.offsetLeft - 45 + "px";
            break;
        case 'ArrowRight':
            player.style.left = player.offsetLeft + 45 + "px";
            break;
    }
});
