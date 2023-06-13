const image = document.querySelector("#Image")!;
var myMusic;
image?.addEventListener("click", changeImage);

function changeImage() {
    image.src = "dist/images/ליצן2.png"
    let ding = new Audio('ding.mp3');
    ding.play();

}

image?.addEventListener("mouseout", hover);


function hover() {
    image.src = "dist/images/ליצן.png"
}