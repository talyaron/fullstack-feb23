var image = document.querySelector("#Image");
var myMusic;
image === null || image === void 0 ? void 0 : image.addEventListener("click", changeImage);
function changeImage() {
    image.src = "dist/images/ליצן2.png";
    var ding = new Audio('ding.mp3');
    ding.play();
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseout", hover);
function hover() {
    image.src = "dist/images/ליצן.png";
}
