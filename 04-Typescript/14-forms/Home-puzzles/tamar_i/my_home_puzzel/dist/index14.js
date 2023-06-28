//1) Create a form with the following inputs:
//Image URL: This input allows the user to enter the URL of an image.
//Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
//When the user submits the form, display the image on the screen with the specified width.
//data (model)
var imageDataFromUser = /** @class */ (function () {
    function imageDataFromUser(imgUrl, imgWidthSize) {
        this.imgUrl = imgUrl;
<<<<<<< HEAD
        this.imgWidthSize = imgWidthSize;
=======
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
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
        // console.log(event.target)
        console.dir(event); //to see what we got in the consol
        var imgURL = event.target.elements.imgUrl.value; //pey attention to the event.target.element.[name from html].value
        var imgWidthSize = event.target.elements.imgWidthSize.value;
        // const multiple: number = event.target.elements.multiple.value;
=======
        console.dir(event); //to see what we got in the consol
        var imgURL = event.target.imgURL.value;
        var imgWidthSize = event.targer.imgWidthSize.value;
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
        var imgData = new imageDataFromUser(imgURL, imgWidthSize);
        console.log(imgData); //to see that i got the data right
        // get the data and store it in the array
        imgArray.push(imgData);
<<<<<<< HEAD
        // call a function to rander the data to the html (DOM)
        var root = document.querySelector('#root');
        // for (let i = 0; i < multiple; i++) {
        renderImage(imgArray, root);
        // }
        event.target.reset();
=======
        //call a function to rander the data to the html (DOM)
        var root = document.querySelector('#root');
        renderImage(imgArray, root);
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
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
<<<<<<< HEAD
        var backToHtml = imgArray.map(function (imgData) { return renderpic(imgData); }).join(" "); //imgData.map go all over the array, renderpic get inside every cell and render it
        element.innerHTML = backToHtml; //send it back to the html
        // const lastIndex = imgArray.length - 1
        // element?.innerHTML = `<img src="${imgArray[lastIndex].imgUrl}" style="width: ${imgArray[lastIndex].imgWidthSize}px"/>`
=======
        var backToHtml = imgArray.map(function (imgData) { return renderpic(imgData); }).join(" "); //imgData.map go all over the array, renderpic get insise every cell and render it
        element.innerHTML = backToHtml; //send it back to he html
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
    }
    catch (error) {
        console.error(error);
    }
}
function renderpic(imgData) {
    try {
<<<<<<< HEAD
        var backToHtml = "<img class= \"image\" src=\"" + imgData.imgUrl + "\"  style=\"width: " + imgData.imgWidthSize + "px\">";
        // <form onSubmit="chengeSize(event)">
        //     <input type="number" name="urlSize" placeholder="Enter image Size" value="${imgData.imgWidthSize}"/>
        //     <button type="submit">Chenge Size</button>
        // </form>`
=======
        var backToHtml = "<img class= \"image\" src=\"" + imgData.imgUrl + "\"  style=width: \"" + imgData. + "\">";
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
        return backToHtml;
    }
    catch (error) {
        console.error(error);
    }
}
<<<<<<< HEAD
//an example to add a "change img size" option in the form and how to do it in ts +line 66-69
// function chengeSize(ev) {
//     ev.preventDefault()
//     //find the image
//     //update the value
// }
//2) Create a form with the following inputs:
//Image URL: This input allows the user to enter the URL of an image.
//Number of Images: This input allows the user to enter a number.
//When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
//Use the "Puzzle Users" class
=======
>>>>>>> 05ede7c4fc138e42339c896fa5313fdb6a38f8dd
