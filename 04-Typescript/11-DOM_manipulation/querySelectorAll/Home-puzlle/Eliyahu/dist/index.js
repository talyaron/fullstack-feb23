var Img = /** @class */ (function () {
    function Img(imgSrc) {
        this.imgSrc = imgSrc;
    }
    return Img;
}());
function getImageUrl() {
    try {
        var imgUrl = prompt("Enter image url");
        var img = document.querySelector("#img");
        if (img && imgUrl) {
            img.style.backgroundImage = "url(" + imgUrl + ")";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getImagesUrl() {
    try {
        var imgs = document.querySelectorAll(".img");
        if (imgs) {
            imgs.forEach(function (img) {
                img.style.backgroundImage = "url(" + prompt("Enter image url") + ")";
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
// function xxx(imgsArr: Array<Img>) {
//     const imgUrl: string | null = prompt("Enter image url")
//     if (imgUrl) {
//         imgsArr.forEach(element => {
//             imgsArr.push(new Img (`${imgUrl}`))
//         });
//         console.log (imgsArr)
//     }
// }
getImageUrl();
getImagesUrl();
// const arr:Array<Img> = []
// arr.length = 5
// xxx(arr)
