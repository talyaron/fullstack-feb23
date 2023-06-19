function addImage(event) {
    try {
        event.preventDefault();
        console.dir(event);
        var imgURL = event.target.imgURL.value;
        var imgWidthSize = event.targer.imgWidthSize.value;
        console.log(imgURL, imgWidthSize);
        var root = document.querySelector('#root');
        if (root) {
            root.innerHTML = "" + imgURL;
        }
    }
    catch (error) {
        console.error(error);
    }
}
