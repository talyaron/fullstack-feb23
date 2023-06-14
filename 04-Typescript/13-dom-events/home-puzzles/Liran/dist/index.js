var root = document.querySelector("#root");
var imgPath = "./dog.png";
var dogNum = 3;
function renderDogs(root, source, numOfDog) {
    try {
        if (!root)
            throw new Error("Error");
        for (var i = 0; i < numOfDog; i++) {
            root.innerHTML += "<img src=\"" + source + "\">";
        }
        return root.innerHTML;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
renderDogs(root, imgPath, dogNum);
var img = document.querySelectorAll("img");
img.forEach(function (dog) {
    dog.style.top = Math.floor(Math.random() * 70) + "vh";
    dog.style.left = Math.floor(Math.random() * 70) + "vw";
});
var images = document.querySelectorAll("img");
images.forEach(function (image) {
    image.addEventListener("mouseout", function (ev) {
        image.style.top = ev.pageY - 100 + "px";
        image.style.left = ev.pageX - 100 + "px";
        var audio = new Audio('dog_barking-6296.mp3');
        audio.play();
    });
});
