function renderHowtoImg(htmlElement) {
    try {
        var imageHowTo = document.querySelector("#imageHowTo");
        var howTo = document.querySelector("#howTo");
        howTo === null || howTo === void 0 ? void 0 : howTo.addEventListener("click", function (ev) {
            "<div id=\"imageHowTo\">\n        <img src=\"./dist/imges/HowTo.png\" alt=\"\">\n    </div>";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleHowtoImg(ev) {
    renderHowtoImg(document.querySelector("#imageHowTo"));
}
