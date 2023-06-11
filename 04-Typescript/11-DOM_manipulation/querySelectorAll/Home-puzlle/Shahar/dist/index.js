function GetImg() {
    var urlImg = prompt('insert url image please');
    var box = document.querySelector('#box');
    if (urlImg && box) {
        return box.style.backgroundImage = urlImg + "px";
    }
}
GetImg();
console.dir(GetImg);
