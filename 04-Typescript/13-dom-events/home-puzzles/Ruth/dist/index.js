var dog = document.querySelector(".dog");
var melona = document.querySelector(".melona");
melona.style.left = "calc(" + Math.random() * 100 + "% - 100px)";
melona.style.top = "calc(" + Math.random() * 100 + "% - 100px)";
dog.addEventListener("click", onClick);
var isClick = false;
function onClick(e) {
    if (isClick == false) {
        document.addEventListener("mousemove", onMouseMove);
        isClick = true;
    }
    else {
        document.removeEventListener("mousemove", onMouseMove);
        isClick = false;
        checkArrived();
    }
}
var onMouseMove = function (e) {
    dog.style.left = e.pageX - 40 + "px";
    dog.style.top = e.pageY - 50 + "px";
};
function checkArrived() {
    var melonaSize = melona === null || melona === void 0 ? void 0 : melona.getBoundingClientRect();
    var dogSize = dog.getBoundingClientRect();
    if (melonaSize.left <= dogSize.right &&
        melonaSize.right >= dogSize.left &&
        melonaSize.top <= dogSize.bottom &&
        melonaSize.bottom >= dogSize.top) {
        alert("congratulation!");
        location.reload();
    }
}
