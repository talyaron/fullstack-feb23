var User = /** @class */ (function () {
    function User(userName, age, favorite, picture) {
        this.userName = userName;
        this.age = age;
        this.favorite = favorite;
        this.picture = picture;
    }
    return User;
}());
var userArray = new Array();
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var picture = ev.target.userPic.value;
        var age = ev.target.age.valueAsNumber;
        var vColor = ev.target.favorite.value;
        var user = new User(username, age, vColor, picture);
        userArray.push(user);
        renderCard(user);
    }
    catch (error) {
        console.error(error);
    }
}
function backgroundC(str, id) {
    try {
        var bc = document.querySelector("#" + id);
        console.log(bc);
        if (!bc)
            throw new Error("Error");
        bc.style.backgroundColor = str;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCard(user) {
    try {
        var cards = document.querySelector("#cards");
        if (!cards)
            throw new Error("Missing information");
        cards.innerHTML += "<div id=\"" + userArray.length + "\" class=\"card\">\n        <div class=\"userName\">Name: " + user.userName + "</div>\n        <div class=\"age\">Age: " + user.age + "</div>\n        <img class=\"image\" src=\"" + user.picture + "\"> </div> ";
        backgroundC(user.favorite, userArray.length);
    }
    catch (error) {
        console.error(error);
    }
}
