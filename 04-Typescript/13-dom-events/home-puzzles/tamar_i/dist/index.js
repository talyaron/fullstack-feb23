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
// use `mousemove`.
//1: get the element
var flawer = document.getElementById("flawer");
var moving = false;
//2. need to add an event listener to move it
if (flawer) {
    flawer.addEventListener("mousedown", initialClick, false);
}
//3. bild a move function to change the cordinats of the item acording to the cordinats of the mouse.
function move(e) {
    var newX = e.clientX - 10;
    var newY = e.clientY - 10;
    if (flawer) {
        flawer.style.left = newX + "px";
        flawer.style.top = newY + "px";
    }
}
//4. bild a function that catch the item (initial click)
function initialClick(e) {
    if (moving) {
        document.removeEventListener("mousemove", move);
        moving = !moving;
        return;
    }
    moving = !moving;
    flawer = this;
    document.addEventListener("mousemove", move, false);
}
