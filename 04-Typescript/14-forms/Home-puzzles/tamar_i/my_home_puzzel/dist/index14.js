//1) Create a form with the following inputs:
//Image URL: This input allows the user to enter the URL of an image.
//Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
//When the user submits the form, display the image on the screen with the specified width.
//data (model)
var imageDataFromUser = /** @class */ (function () {
    function imageDataFromUser(imgUrl, imgWidthSize) {
        this.imgUrl = imgUrl;
    }
    return imageDataFromUser;
}());
//keep all images 
var imgArray = new Array();
//GUI - get from user
//controler - handel the data and add ut to the model (to the array)
function handelSubmitImg(event) {
    try {
        event.preventDefault(); //prevent default satting from work - mast!
        console.dir(event); //to see what we got in the consol
        var imgURL = event.target.imgURL.value;
        var imgWidthSize = event.targer.imgWidthSize.value;
        var imgData = new imageDataFromUser(imgURL, imgWidthSize);
        console.log(imgData); //to see that i got the data right
        // get the data and store it in the array
        imgArray.push(imgData);
        //call a function to rander the data to the html (DOM)
        var root = document.querySelector('#root');
        renderImage(imgArray, root);
    }
    catch (error) {
        console.error(error);
    }
}
//controler - handel the data and render it to the DOM (write the function that we call in line 36)
function renderImage(imgArray, element) {
    try {
        if (!element)
            throw new Error("element is not defined"); //check if we got an element from the html
        var backToHtml = imgArray.map(function (imgData) { return renderpic(imgData); }).join(" "); //imgData.map go all over the array, renderpic get insise every cell and render it
        element.innerHTML = backToHtml;
    }
    catch (error) {
        console.error(error);
    }
}
function renderpic(imgData) {
    try {
        var backToHtml = "<img class= \"image\" src=\"" + imgData.imgUrl + "  style=\"width: " + imgData.imgWidthSize + "\">";
        return backToHtml;
    }
    catch (error) {
        console.error(error);
    }
}
