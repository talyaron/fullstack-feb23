//1
function gerURLimg() {
    try {
        var imgURLfromuser = prompt("please enter URL for your image");
        var imgurl = document.querySelector("#imgurl");
        if (imgurl && imgURLfromuser) {
            imgurl.style.backgroundImage = "url(" + imgURLfromuser + ")";
            console.log(imgURLfromuser);
        }
    }
    catch (error) {
        console.error(error);
    }
}
gerURLimg();
//2
function get_url_images_fromUser() {
    try {
        var images = document.querySelectorAll(".image");
        console.dir(images);
        var i_1 = 1;
        images.forEach(function (image) {
            image.style.backgroundImage = "url(" + prompt("please enter your " + i_1 + " from 5 URL for your images") + ")";
            i_1++;
        });
    }
    catch (error) {
        console.error(error);
    }
}
get_url_images_fromUser();
//3
var Imagesfromuser = /** @class */ (function () {
    function Imagesfromuser(imgsrc) {
        this.imgsrc = imgsrc;
    }
    return Imagesfromuser;
}());
var imgesArray = [];
function get_images_fromUser_toArray() {
    try {
        var images = document.querySelectorAll(".image");
        console.dir(images);
        var imgtoHTML = imgesArray.map(function (img) { return "url(" + prompt("please enter URL for your images") + ")"; }).join("");
    }
    catch (error) {
        console.error(error);
    }
}
