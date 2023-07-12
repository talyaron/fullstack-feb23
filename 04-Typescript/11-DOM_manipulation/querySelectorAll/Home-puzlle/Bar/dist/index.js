// 1) get an image URL from the user, and add the image to the DOM. 
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
    // debugger
    try {
        var getImgUrl = prompt("Enter image Url");
        var imgPROFAIL = document.querySelector("#imgPROFAIL");
        if (imgPROFAIL && getImgUrl) {
            imgPROFAIL.innerHTML = "<img src= \"" + getImgUrl + "\"/>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
getImgUrlUser();
//get number of folowers from the yuser
function getFolowers() {
    var getFolowersFrom_User = prompt("How many followers do you have?");
    var folowers = document.querySelector("#folowers");
    try {
        if (folowers && getFolowersFrom_User)
            folowers.innerHTML = "<p>folowers " + getFolowersFrom_User + " </p>";
    }
    catch (error) {
        console.error(error);
    }
}
getFolowers();
// 2) get five image URLs from the user and print five images on the DOM.
//get the elements from the dom.
var imgArray = document.querySelector("#imgArray");
function getFiveImgs() {
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
        var imgArray_1 = document.querySelector("#imgArray");
        if (imgArray_1) {
            imgArray_1.innerHTML = imgsHTML;
        }
    }
}
// 3) do task number 2. Store items using array of a class.
// create a method for rendering an image to the dom.
// render all of them to the DOM.
// class NewArrayImgs {
//     img_Url: string;
//     constructor(img_Url: string,) {
//         this.img_Url = img_Url
//     }
// }
// const newArrayImgs: any[] = [
//     new NewArrayImgs(`${imgUrl}`)
// ];
// console.log(newArrayImgs)
