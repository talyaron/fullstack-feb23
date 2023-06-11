// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var page = document.body;
var p = document.createElement('p');
function getImage() {
    try {
        var imageOne = prompt('Enter the first image url');
        var imageTwo = prompt('Enter the second image url');
        var imageThree = prompt('Enter the third image url');
        var imageFour = prompt('Enter the fourth image url');
        var imageFive = prompt('Enter the fifth image url');
        var imageContainer = document.querySelector('#image-container');
        if (imageContainer) {
            if (imageOne) {
                var imgOne = document.createElement('img');
                imgOne.src = imageOne;
                imageContainer.appendChild(imgOne);
            }
            if (imageTwo) {
                var imgTwo = document.createElement('img');
                imgTwo.src = imageTwo;
                imageContainer.appendChild(imgTwo);
            }
            if (imageThree) {
                var imgThree = document.createElement('img');
                imgThree.src = imageThree;
                imageContainer.appendChild(imgThree);
            }
            if (imageFour) {
                var imgFour = document.createElement('img');
                imgFour.src = imageFour;
                imageContainer.appendChild(imgFour);
            }
            if (imageFive) {
                var imgFive = document.createElement('img');
                imgFive.src = imageFive;
                imageContainer.appendChild(imgFive);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
getImage();
