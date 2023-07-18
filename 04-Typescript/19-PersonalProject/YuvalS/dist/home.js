function renderHowtoImg(htmlElement) {
    try {
        var imageHowTo_1 = document.querySelector("#imageHowTo");
        var html = "<div id=\"imageHowTo\">\n        <img src=\"./dist/imges/HowTo.png\" alt=\"\">\n    </div>";
        imageHowTo_1.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleHowtoImg(ev) {
    ev.preventDefault();
    renderHowtoImg(document.querySelector("#imageHowTo"));
}
var imageHowTo = document.querySelector("#imageHowTo");
imageHowTo.addEventListener("click", function (event) {
    imageHowTo.remove();
});
