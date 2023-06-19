var User = /** @class */ (function () {
    function User(userName, imageURL, color, yearOfBirth) {
        this.userName = userName;
        this.imageURL = imageURL;
        this.color = color;
        this.yearOfBirth = yearOfBirth;
    }
    User.prototype.calculateAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    User.prototype.renderUser = function (root) {
        try {
            if (!root)
                throw new Error("missing root element");
            var html = "<div class=\"userCard\" id=\"" + this.color + "\"><img class=\"userImg\" src=\"" + this.imageURL + "\"></img></div>";
            root.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    return User;
}());
var users = [];
var root = document.querySelector(".root");
function addUser(ev) {
    try {
        ev.preventDefault();
        var user = new User(ev.target.userName.value, ev.target.userURL.value, ev.target.userColor.value, ev.target.yearOfBirth.valueAsNumber);
        if (user) {
            users.push(user);
            user.renderUser(root);
            cardStyle();
        }
    }
    catch (error) {
        console.error(error);
        return;
    }
}
function cardStyle() {
    if (root) {
        root.style.width = '100%';
        // root.style.backgroundColor = 'aqua';
        var userCards = root.querySelectorAll('.userCard');
        debugger;
        userCards.forEach(function (userCard) {
            var color = userCard.dataset.userColor;
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}
