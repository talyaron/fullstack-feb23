const image = document.querySelector("#Image")!;
// const sound = new Audio("../dist/audio.mp3");

image?.addEventListener("click", changeImage);

function changeImage() {
    image.src = "dist/images/ליצן2.png"

    // sound.src = 


}

// image?.addEventListener("mouseup", Sound);

// function Sound() {

//     // const sound = new Audio("audio.mp3");
//     // sound.src = "../dist/audio.mp3"
//     sound.play();
// }

image?.addEventListener("mouseout", hover);
function hover() {
    image.src = "dist/images/ליצן.png"
}