var player = document.querySelector('.images');
var onClick = function (event) {
    console.log(player = document.querySelector("#" + event.srcElement.id));
};
window.addEventListener('click', onClick);
document.addEventListener('keyup', function (event) {
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
