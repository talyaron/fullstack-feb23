// 1) create boxes on the screen. when clicking on a button, play sound.
var mySound = new Audio(["http://soundbible.com/grab.php?id=1619&type=mp3"]);
var boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        mySound.play();
    });
});
// 2) Create images of calm faces on the screen. When clicked, change the face into to a frighting clown. when the mouse leaves, change back to the nice face.
var clownUrl = "https://img.freepik.com/premium-vector/scary-red-clown-logo_43623-926.jpg?w=740";
var calmFace = "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/smile-day1.jpg";
var pics = document.querySelectorAll(".pic");
pics.forEach(function (pic) {
    pic.style.backgroundImage = "url(\"" + calmFace + "\")";
    pic.addEventListener('click', function () {
        pic.style.backgroundImage = "url(\"" + clownUrl + "\")";
    });
    pic.addEventListener('mouseleave', function () {
        pic.style.backgroundImage = "url(\"" + calmFace + "\")";
    });
});
// console.log(pics)
// 3) Create images of dogs on the screen. when the mouse leave the dog, the dog follows the mouse.
