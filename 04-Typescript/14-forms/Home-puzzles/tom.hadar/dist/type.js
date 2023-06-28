// class
var Uzer = /** @class */ (function () {
    function Uzer(imgUrl, width) {
        this.imgUrl = imgUrl;
        this.width = width;
    }
    return Uzer;
}());
var Imgarr = [];
function UrlWidth(event) {
    try {
        event.preventDefault();
        var imgUrl = event.target.elements.imgUrl.value;
        var width = event.target.elements.width.value;
        var data = new Uzer(imgUrl, width);
        Imgarr.push(data);
        var root = document.querySelector("#root");
        event.target.reset();
        render(Imgarr, root);
    }
    catch (error) {
        console.log(error);
    }
}
function render(uzer, root) {
    var html = uzer.map(function (uzer) {
        return "<div>\n      <img src=\"" + uzer.imgUrl + "\" style=\"width: " + uzer.width + "px;\">\n      </div>";
    }).join("");
    root.innerHTML = html;
}
// class Uzer {
//     constructor(public imgUrl:any,public width:number) {}
// }
// const Imgarr = [];
// function UrlWidth(event) {
//     try {
//         event.preventDefault();
//         const imgUrl = event.target.elements.imgUrl.value;
//         const width = event.target.elements.width.value;
//         const data = new Uzer(imgUrl, width);
//         console.log(data);
//         Imgarr.push(data);
//         const root = document.querySelector("#root");
//         event.target.reset();
//         render(Imgarr, root);
//     } catch (error) {
//         console.log(error);
//     }
// }
// function render(uzer, root) {
//     const html = uzer.map((uzer) => {
//         return `<div>
//             <img src="${uzer.imgUrl}" style="width: ${uzer.width}px;">
//         </div>`;
//     }).join("");
//         root.innerHTML = html;
// }
