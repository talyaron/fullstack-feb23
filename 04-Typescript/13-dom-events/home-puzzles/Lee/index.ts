const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', playMusic => {
        console.log(playMusic)

        // ev.target.style.backgroundColor = getRandomColor();

    })
})


function playMusic() {
    let audio = new Audio("audio.mp3");
    audio.play()

    return Audio
}


// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()* 16)];
//     }
//     return color;
// }