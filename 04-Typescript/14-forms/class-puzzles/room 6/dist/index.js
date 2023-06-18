function handleInput(event) {
    console.dir(event);
    console.log(event.target.value);
    var root = document.querySelector('#root');
    if (root) {
        root.innerHTML = event.target.value;
    }
}
var arrPlayers = [];
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var imageUrl = ev.target.imageUrl.value;
        var yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        var age = new Date().getFullYear() - yearOfBirth;
        var color = ev.target.color.value;
        var result = { username: username, imageUrl: imageUrl, age: age, color: color };
        console.log(result);
        arrPlayers.push(result);
    }
    catch (error) {
        console.error(error);
    }
}
var root = document.querySelectorAll('.root');
var Player = /** @class */ (function () {
    function Player(username, imageUrl, age, color) {
        this.username = username;
        this.imageUrl = imageUrl;
        this.age = age;
        this.color = color;
    }
    Player.prototype.renderPlyer = function (root) {
        try {
            if (!root)
                throw new Error("missing root element");
            var html = "<div class='card' onclick=\"handleHideCard('" + this.id + "')\" id=\"" + this.id + "\"><img src=\"" + this.imgUrl + "\"><h4>" + this.title + "</h4></div>";
            root.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
