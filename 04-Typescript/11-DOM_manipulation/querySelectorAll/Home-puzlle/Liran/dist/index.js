var ImgUrl = /** @class */ (function () {
    function ImgUrl(address) {
        try {
            if (!address)
                throw new Error("Input Error");
            this.address = address;
        }
        catch (error) {
            console.error(error);
        }
    }
    ImgUrl.prototype.render = function () {
        try {
            var root = document.querySelector("#root");
            if (root == null)
                throw new Error("Can't catch #root");
            root.innerHTML += "<img src=\"" + this.address + "\">";
            return;
        }
        catch (error) {
            console.error(error);
        }
    };
    return ImgUrl;
}());
;
function imgToDom(urlList) {
    try {
        if (urlList === null)
            throw new Error("Error in Array");
        urlList.forEach(function (imgAddress, index) {
            return setTimeout(function () { return imgAddress.render(); }, (index - 4) * 500);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// Main
var inputLength = 5;
var countInput = 0;
var imgList = new Array(inputLength);
while (countInput < inputLength) {
    var imgUrl = prompt("Please enter image number " + (countInput + 1) + " url");
    if (imgUrl !== null && imgUrl !== "") {
        imgList.push(new ImgUrl(imgUrl));
        countInput++;
    }
}
imgToDom(imgList);
