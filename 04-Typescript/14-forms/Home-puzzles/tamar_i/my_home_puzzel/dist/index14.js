//1) Create a form with the following inputs:
//Image URL: This input allows the user to enter the URL of an image.
//Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
//When the user submits the form, display the image on the screen with the specified width.
//data (model)
var imageDataFromUser = /** @class */ (function () {
    function imageDataFromUser(imgUrl, imgWidthSize) {
        this.imgUrl = imgUrl;
        this.imgWidthSize = imgWidthSize;
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
<<<<<<< HEAD
        console.dir(event); //to see what we got in the consol
        var imgURL = event.target.imgURL.value;
        var imgWidthSize = event.target.imgWidthSize.value;
=======
        // console.log(event.target)
        // console.dir(event);  //to see what we got in the consol
        var imgURL = event.target.elements.imgUrl.value;
        var imgWidthSize = event.target.elements.imgWidthSize.value;
>>>>>>> d01fde47ec1d93487cfa8f97ac8a7e1cdad485b2
        var imgData = new imageDataFromUser(imgURL, imgWidthSize);
        console.log(imgData);
        // console.log(imgData); //to see that i got the data right
        // // get the data and store it in the array
        imgArray.push(imgData);
        // //call a function to rander the data to the html (DOM)
        var root = document.querySelector('#root');
        renderImage(imgArray, root);
        event.target.reset();
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
        element.innerHTML = backToHtml; //send it back to he html
        //send it back to he html
        // const lastIndex = imgArray.length - 1
        // element?.innerHTML = `<img src="${imgArray[lastIndex].imgUrl}" style="width: ${imgArray[lastIndex].imgWidthSize}px"/>`
    }
    catch (error) {
        console.error(error);
    }
}
function renderpic(imgData) {
    try {
        var backToHtml = "<img class= \"image\" src=\"" + imgData.imgUrl + "\"  style=\"width: " + imgData.imgWidthSize + "px\">\n            <form onSubmit=\"chengeSize(event)\">\n                <input type=\"number\" name=\"urlSize\" placeholder=\"Enter image Size\" value=\"" + imgData.imgWidthSize + "\"/>\n                <button type=\"submit\">Chenge Size</button>\n            </form>";
        return backToHtml;
    }
    catch (error) {
        console.error(error);
    }
}
function chengeSize(ev) {
    ev.preventDefault();
    //find the image
    //update the value
}
