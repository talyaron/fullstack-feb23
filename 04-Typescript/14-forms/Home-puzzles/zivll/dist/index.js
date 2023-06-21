// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
// 2) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
// Use the "Puzzle Users" class:
// this function handle the event on submit
function handleSubmit(event) {
    event.preventDefault();
    var imageUrl = event.target.imageUrl.value;
    var imageWidth = event.target.imageWidth.value;
    var multiplyImage = event.target.multiplyImage.valueAsNumber;
    renderImages(imageUrl, imageWidth, multiplyImage);
}
// this function render to ducument recording user's DATA
function renderImages(imageUrl, imageWidth, multiplyImage) {
    var imageDiv = document.querySelector("#images-wrapper");
    if (imageDiv) {
        for (var i = 0; i < multiplyImage; i++) {
            imageDiv.innerHTML += "<img src=\"" + imageUrl + "\" style=\"width: " + imageWidth.toString() + "px\">";
        }
    }
}