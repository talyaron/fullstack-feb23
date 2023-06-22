var wrapper = document.querySelector(".wrapper");
var user = /** @class */ (function () {
    function user(username, imgUrl, userColor, numberRepeat, userId) {
        this.username = username;
        this.imgUrl = imgUrl;
        this.userColor = userColor;
        this.numberRepeat = numberRepeat;
        this.userId = userId;
        this.userId = Date.now();
    }
    user.prototype.render = function (numberRepeat) {
        var card = document.createElement("div");
        card.id = this.userId;
        card.className = "userCard";
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(card);
        card.innerHTML = "name:" + this.username + " <button onclick=\"divDelete(event)\">delete</button>";
        card.style.backgroundColor = this.userColor;
        var cardimgs = document.createElement("div");
        cardimgs.className = "cardimgs";
        card.appendChild(cardimgs);
        for (var i = 0; i < numberRepeat; i++) {
            var cardimg = document.createElement("div");
            cardimg.className = "cardimg";
            cardimg.style.backgroundImage += "url(" + this.imgUrl + ") ";
            cardimgs.appendChild(cardimg);
        }
    };
    return user;
}());
var userArray = new Array();
function handleSubmit(ev) {
    ev.preventDefault();
    var username = ev.target.name.value;
    var imgUrl = ev.target.imgUrl.value;
    var userColor = ev.target.userColor.value;
    var numberRepeat = ev.target.numberRpeat.value;
    var newUser = new user(username, imgUrl, userColor, numberRepeat);
    userArray.push(newUser);
    newUser.render(numberRepeat);
}
function divDelete(ev) {
    console.log(ev.target.parentElement.id);
    var fatherid = ev.target.parentElement.id;
    userArray.forEach(function (element) {
        if (element.userId == fatherid) {
            ev.target.parentElement.remove();
        }
    });
}
