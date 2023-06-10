// 2) get five image URLs from the user and print five images on the DOM.
var imgInput = document.querySelector("#userInput");
var imgContainer = document.querySelector("#portrait");
if (imgInput.value === "") {
    imgInput.placeholder = "Enter a URL";
}
function printImg() {
    imgContainer.src = imgInput.value;
}
imgInput.addEventListener("input", printImg);
