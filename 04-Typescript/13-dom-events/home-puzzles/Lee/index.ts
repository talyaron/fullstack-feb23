
const playMusic = new Audio("audio.mp3");
const boxes = document.querySelectorAll('.box');
console.log(boxes)
boxes.forEach(box => {
    box.addEventListener('click', () => {
        playMusic.play()

        // ev.target.style.backgroundColor = getRandomColor();

    })
})


// const oldJoke = "https://img.freepik.com/premium-vector/scary-red-clown-logo_43623-926.jpg?w=740";
// const newJoke = "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/7573050/image/e24f33d5d04e47a8b90db0479a203ec6";
// const images:any = document.querySelectorAll(".img");

// images.forEach((img) => {
//     img.style.backgroundImage = `url("${newJoke}")`
//     img.addEventListener('click', () => {
//         img.style.backgroundImage = `url("${oldJoke}")`

//     });
//     img.addEventListener('mouseleave', () => {
//         img.style.backgroundImage = `url("${newJoke}")`

//     });


// });

// function playMusic() {
//     let audio = new Audio("audio.mp3");
//     audio.play()

//     return Audio
// }


// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()* 16)];
//     }
//     return color;
// }