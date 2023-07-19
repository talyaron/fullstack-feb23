function renderHowtoImg(htmlElement) {
    try {
        var imageHowTo = document.querySelector("#imageHowTo");
        var html = "\n        <img id=\"imageH\" src=\"./dist/imges/HowTo.png\" alt=\"\">";
        imageHowTo.innerHTML = html;
        var imageH_1 = document.querySelector("#imageH");
        imageH_1.addEventListener("click", function () {
            imageH_1.remove();
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleHowtoImg(ev) {
    ev.preventDefault();
    renderHowtoImg(document.querySelector("#imageHowTo"));
}
