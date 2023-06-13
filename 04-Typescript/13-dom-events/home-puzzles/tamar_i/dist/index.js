//1
var audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
var box = document.querySelectorAll(".box");
box.forEach(function (box) {
    box.addEventListener("click", function (ev) {
        ev.target.style.backgroundColor = "red";
        audio.play();
    });
});
//2) Create images of calm faces on the screen. --> boximg with calm face
//   When clicked, change the face into to a frighting clown. --> chang background image
//   when the mouse leaves, change back to the nice face.
var boximg = document.querySelector(".boximg");
if (boximg) {
    boximg.addEventListener("click", function (ev) {
        ev.target.style.backgroundImage = "url(https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%9B%D7%95%D7%A2%D7%A1-%D7%90%D7%A8%D7%99%D7%94-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%9E%D7%A0%D7%99%D7%95%D7%AA_csp2173500.jpg)";
    });
    boximg.addEventListener("mouseout", function (ev) {
        ev.target.style.backgroundImage = "url(https://kicky.co.il/wp-content/uploads/2022/05/%D7%90%D7%A8%D7%99%D7%94-%D7%95%D7%A0%D7%9E%D7%A8%D7%94-1024x683.jpg)";
    });
}
//3) Create images of flawer on the screen.
//  when the mouse leave the flawer, it follows the mouse.
