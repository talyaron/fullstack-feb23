// 1) get an image URL from the user, and add the image to the DOM. 
// class Img {
//     imgUrl: string;
//     constructor(imgUrl: string,) {
//         this.imgUrl = imgUrl;
//     }
// }
//get image url from the user
// const imgSrc = prompt("enterimg url");
//put it on the dom
//get the element on the DOM
// const img = document.querySelector("#img");
//innerHTML
// if(img){
//     img.innerHTML = `<img src=${imgSrc} />`;
// }
function getImgUrlUser() {
    try {
        var getImgUrl = prompt("enter  image Url");
        var imgURL = document.querySelector("#imgURL");
        if (imgURL && getImgUrl) {
            imgURL.innerHTML = "<img src= " + getImgUrl + "/>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
// getImgUrlUser();
// 2) get five image URLs from the user and print five images on the DOM.
//get the elements from the dom.
function getFiveImgs() {
    var imgArray = document.querySelector("#imgArray");
    var newArrayImgs = [];
    try {
        for (var i = 1; i <= 5; i++) {
            // get 5 image url from the user.
            var ImgURL5 = prompt("Entere the " + i + " of 5");
            newArrayImgs.push(ImgURL5);
            console.log(newArrayImgs);
        }
        return newArrayImgs;
    }
    catch (error) {
        console.error(error);
    }
}
//we got 5 urls
var imgs = getFiveImgs();
//print to the DOM
renderImges(imgs);
function renderImges(imgs) {
    if (imgs) {
        var imgsHTML = imgs.map(function (imgUrl) { return "<img src=\"" + imgUrl + "\">"; }).join(" ");
        console.log(imgsHTML);
        var imgArray = document.querySelector("#imgArray");
        if (imgArray) {
            imgArray.innerHTML = imgsHTML;
        }
    }
}
// const newArray = getFiveImgs();
// 3) do task number 2. Store items using array of a class.
// create a method for rendering an image to the dom.
// render all of them to the DOM.
