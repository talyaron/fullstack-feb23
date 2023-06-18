var image = document.querySelector("#Image");
var sound = new Audio("./dist/audio.mp3");
image === null || image === void 0 ? void 0 : image.addEventListener("click", changeImage);
function changeImage() {
    image.src = "dist/images/ליצן2.png";
    sound.play();
    // sound.src = 
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseout", hover);
function hover() {
    image.src = "dist/images/ליצן.png";
}
