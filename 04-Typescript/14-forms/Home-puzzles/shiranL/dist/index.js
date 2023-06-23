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
            var html = "<div class=\"userCard\" color=\"" + this.color + "\" id=\"A" + this.id + "\">\n                            <img class=\"userImg\" src=\"" + this.imageURL + "\">\n                            <h4 class=\"userName\">my Name: " + this.userName + "</h4>\n                            <h3 class=\"userAge\">my Age: " + this.calculateAge() + "</h3>\n                            <button class=\"updateBtn\" data-user=\"" + this.userName + "\" onclick=\"updateUser('" + this.userName + "')\">UPDATE</button>\n                            </div>";
            // Create a temporary element to hold the new user card
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            var userCard_1 = tempDiv.firstChild;
            // Set initial opacity to 0 and add transition
            userCard_1.style.opacity = '0';
            userCard_1.style.transition = 'opacity 0.5s ease-in';
            // Append the card to the root element
            root.appendChild(userCard_1);
            // Trigger the transition by setting opacity to 1 after a small delay
            setTimeout(function () {
                userCard_1.style.opacity = '1';
            }, 10);
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
                userCard.style.color = getFontColor(color);
                var updateBtn = userCard.querySelector('.updateBtn');
                if (updateBtn) {
                    updateBtn.style.backgroundColor = getFontColor(color);
                    updateBtn.style.color = color;
                }
            }
        });
    }
}
function getFontColor(color) {
    // Convert color to RGB format
    debugger;
    color = color.replace('#', '');
    var red = parseInt(color.substring(0, 2), 16);
    var green = parseInt(color.substring(2, 4), 16);
    var blue = parseInt(color.substring(4, 6), 16);
    // Calculate brightness using a formula
    var brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    // Determine the font color based on brightness
    if (brightness > 125) {
        return 'black';
    }
    else {
        return 'white';
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
        var field = prompt("Which field would you like to update? (userName, imageURL, color, yearOfBirth)"); // which filed to updae
        if (!field) {
            throw new Error("no field to update");
        }
        var newValue = prompt("Enter new userName:"); // new value to update
        var elem = document.querySelector("#A" + user.id); // html card user to update;
        switch (field) {
            case "userName":
                if (newValue && elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.userName = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "imageURL":
                if (newValue && elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.imageURL = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "color":
                if (newValue && elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.color = newValue;
                    user.renderUser(root);
                    cardcolorStyle();
                }
                break;
            case "yearOfBirth":
                if (newValue && elem) {
                    elem.remove(); // Remove the element from the DOM
                    user.yearOfBirth = Number(newValue);
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
