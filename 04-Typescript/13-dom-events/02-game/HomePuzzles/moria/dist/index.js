var player = document.querySelector('.images');
// let player;
var onClick = function (event) {
    console.log(player = document.querySelector("#" + event.srcElement.id));
};
window.addEventListener('click', onClick);
// const players = document.querySelectorAll('.player') as NodeListOf<HTMLDivElement>;
// players.forEach(pl => {
//     pl.addEventListener('click', (ev) => {
//         player = ev.target as HTMLDivElement;
//         console.dir(player)
//     });
// });
document.addEventListener('keyup', function (event) {
    event.stopPropagation();
    // console.dir(player)
    // console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            player.style.top = player.offsetTop - 90 + "px";
            break;
        case 'ArrowDown':
            player.style.top = player.offsetTop + 90 + "px";
            break;
        case 'ArrowLeft':
            player.style.left = player.offsetLeft - 85 + "px";
            break;
        case 'ArrowRight':
            player.style.left = player.offsetLeft + 85 + "px";
            break;
    }
});
