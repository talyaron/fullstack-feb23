// get five image URLs from the user and print five images on the DOM.
// const firstImage: string | null = (prompt("Please write the URL of your first image"));
// const secondImage: string | null = (prompt("Please write the URL of your second image"));
// const thirdImage: string | null = (prompt("Please write the URL of your third image"));
// const fourthImage: string | null = (prompt("Please write the URL of your fourth image"));
// const fifthImage: string | null = (prompt("Please write the URL of your fifth image"));
// const div = document.querySelector("#div")!;
// let divImages: string = `<div class='images'><div>`;
// const images: HTMLDivElement | null = document.querySelector(".images")!;
// if (firstImage && div) {
//     // background: url(images / fire.jpg) no - repeat center center / cover;
//     images.style.background = "url(" + `${firstImage}` + ")";
// }
// // function ii(elm: string)=> {
// //     return "url(" + `${elm}` + ")";
// // }
// if (div) {
//     div.innerHTML = divImages;
// }
var Images = /** @class */ (function () {
    function Images(url) {
        this.url = url;
    }
    return Images;
}());
var image = [];
function enterurl() {
    for (var i = 0; i < 5; i++) {
        var url = prompt("Please write your URL ");
        image.push(url);
    }
    return image;
}
enterurl();
var div = document.querySelector("#div");
var URLs = image.map(function (url) { return "<img src=\"" + url + "\">"; }).join(" ");
if (div) {
    div.innerHTML = URLs;
}
