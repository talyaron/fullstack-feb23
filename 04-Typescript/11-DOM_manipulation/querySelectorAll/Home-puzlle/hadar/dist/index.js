var User = /** @class */ (function () {
    function User(ImgName, Img) {
        this.ImgName = ImgName;
        this.Img = Img;
    }
    return User;
}());
UserDetails();
function UserDetails() {
    var firstImgName = prompt("Enter the name of the first image");
    var firstImgUrl = prompt("Please write the URL of the first image");
    var secondImgName = prompt("Enter the name of the second image");
    var secondImgUrl = prompt("Please write the URL of the second image");
    var thirdImgName = prompt("Enter the name of the third image");
    var thirdImgUrl = prompt("Please write the URL of the third image");
    var fourthImgName = prompt("Enter the name of the fourth image");
    var fourthImgUrl = prompt("Please write the URL of the fourth image");
    var fifthImgName = prompt("Enter the name of the fifth image");
    var fifthImgUrl = prompt("Please write the URL of the fifth image");
    var firstUser = new User(firstImgName, firstImgUrl);
    var secondUser = new User(secondImgName, secondImgUrl);
    var thirdUser = new User(thirdImgName, thirdImgUrl);
    var fourthUser = new User(fourthImgName, fourthImgUrl);
    var fifthUser = new User(fifthImgName, fifthImgUrl);
    var div = document.getElementById("box1");
    div.innerHTML += "<p>First User: " + firstUser.ImgName + "<br> <img src=\"" + firstUser.Img + "\"></img></p><hr>";
    div.innerHTML += "<p>Second User: " + secondUser.ImgName + "<br> <img src=\"" + firstUser.Img + "\"></img></p><hr>";
    div.innerHTML += "<p>Third User: " + thirdUser.ImgName + "<br> <img src=\"" + firstUser.Img + "\"></img></p><hr>";
    div.innerHTML += "<p>Fourth User: " + fourthUser.ImgName + "<br> <img src=\"" + firstUser.Img + "\"></img></p><hr>";
    div.innerHTML += "<p>Fifth User: " + fifthUser.ImgName + "<br> <img src=\"" + firstUser.Img + "\"></img></p><hr>";
}
