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
            var html = "<div class=\"userCard\" color=\"" + this.color + "\" id=\"userCard-" + this.userName + "\">\n                      <img class=\"userImg\" src=\"" + this.imageURL + "\">\n                      <h4 class=\"userName\">my Name: " + this.userName + "</h4>\n                      <h3 class=\"userAge\">my Age: " + this.calculateAge() + "</h3>\n                    </div>";
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
        var userCards = root.querySelectorAll('.userCard');
        userCards.forEach(function (userCard) {
            var color = userCard.getAttribute('color');
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}
if (root) {
    root.addEventListener('click', function handleClick(event) {
        var target = event.target;
        console.dir(target);
        console.log(target.className);
        if (target.classList.contains('userCard')) {
            var userCardId = target.id;
            var selectedCard = document.getElementById(userCardId);
            if (selectedCard) {
                selectedCard.classList.toggle('selected');
            }
        }
    });
}
