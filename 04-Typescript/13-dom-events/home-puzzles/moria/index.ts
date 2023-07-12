const image = document.querySelector("#Image")!;
const sound = new Audio("./dist/audio.mp3");

image?.addEventListener("click", changeImage);

function changeImage() {
    image.src = "dist/images/ליצן2.png"
    sound.play();
    // sound.src = 


}

image?.addEventListener("mouseout", hover);
function hover() {
    image.src = "dist/images/ליצן.png"
}