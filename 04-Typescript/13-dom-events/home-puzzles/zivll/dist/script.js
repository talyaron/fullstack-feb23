// Create images of calm faces on the screen.
var clamFace = "https://www.nicepng.com/png/detail/805-8058392_image-is-not-available-woman-with-a-calm.png";
// the class that I need to cach is "imgbox" and "h2"
var rootAllImages = document.querySelectorAll("img");
var rootAllH2 = document.querySelectorAll("h2");
// When clicked, change the face into to a frighting clown.
var clownImg = "https://images.squarespace-cdn.com/content/v1/6051793d0c5c911997546d5f/82ed512a-dad0-4fd6-8792-2474179dda33/Scary+pictures+of+clowns.png";
rootAllH2.forEach(function (h2) {
    h2.onclick = function (ev) {
        console.log(ev);
        h2.nextElementSibling.src = clownImg;
        h2.nextElementSibling.alt = "frightening clown";
        h2.style.fontSize = "50px";
        h2.style.marginTop = 0;
        h2.style.color = "red";
        h2.innerHTML = "GOT YOU!";
    };
});
// when the mouse leaves, change back to the nice face.
rootAllH2.forEach(function (h2) {
    h2.onmouseleave = function (ev) {
        console.log(ev);
        h2.nextElementSibling.src = clamFace;
        h2.nextElementSibling.alt = "clamFace";
        h2.style.fontSize = "2rem";
        h2.style.color = "black";
        h2.innerHTML = "Can you please click me?";
    };
});
