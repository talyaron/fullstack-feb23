var User = /** @class */ (function () {
    function User(id, userName, imageURL, color, yearOfBirth) {
        this.id = id;
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
            var html = "<div class=\"userCard\" color=\"" + this.color + "\" id=\"A" + this.id + "\">\n            <img class=\"userImg\" src=\"" + this.imageURL + "\">\n            <h4 class=\"userName\">my Name: " + this.userName + "</h4>\n            <h3 class=\"userAge\">my Age: " + this.calculateAge() + "</h3>\n            <button class=\"updateBtn\" data-user=\"" + this.userName + "\" onclick=\"updateUser('" + this.userName + "')\">Update</button>\n        </div>";
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
var idIndex = 1000;
function cardcolorStyle() {
    if (root) {
        root.style.width = '100%';
        var usersCards = root.querySelectorAll('.userCard');
        usersCards.forEach(function (userCard) {
            var color = userCard.getAttribute('color');
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}
function addUser(ev) {
    try {
        ev.preventDefault();
        var user = new User(idIndex++, ev.target.userName.value, ev.target.userURL.value, ev.target.userColor.value, ev.target.yearOfBirth.valueAsNumber);
        if (user) {
            var addUserForm = document.querySelector("#addUserForm");
            if (addUserForm)
                addUserForm.reset();
            users.push(user);
            user.renderUser(root);
            cardcolorStyle();
        }
    }
    catch (error) {
        console.error(error);
        return;
    }
}
function updateUser(userName) {
    try {
        var user = users.find(function (user) { return user.userName === userName; });
        if (!user) {
            console.error("User not found");
            return;
        }
        // deleteUserCard(user.userName);
        var field = prompt("Which field would you like to update? (userName, imageURL, color, yearOfBirth)");
        if (!field) {
            throw new Error("no field to update");
        }
        var newValue = void 0;
        var elem = void 0;
        switch (field) {
            case "userName":
                newValue = prompt("Enter new userName:");
                if (newValue)
                    elem = document.querySelector("#A" + user.id); // html card user
                if (elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.userName = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "imageURL":
                newValue = prompt("Enter new userName:");
                if (newValue)
                    elem = document.querySelector("#A" + user.id); // html card user
                if (elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.imageURL = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "color":
                newValue = prompt("Enter new userName:");
                if (newValue)
                    elem = document.querySelector("#A" + user.id); // html card user
                if (elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.color = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "yearOfBirth":
                newValue = prompt("Enter new userName:");
                if (newValue)
                    elem = document.querySelector("#A" + user.id); // html card user
                if (elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.yearOfBirth = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            default:
                console.log("Invalid field specified");
                return;
        }
    }
    catch (error) {
        console.error(error);
    }
}
