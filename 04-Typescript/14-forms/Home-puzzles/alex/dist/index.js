// complete on your own the class puzzle
// 1) Create a form with the following inputs:
// `
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
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
            var html = "<div class='card'><img src=\"" + this.imageURL + "\"></img></div>";
            root.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    return User;
}());
var users = [];
function addUser(ev) {
    try {
        ev.preventDefault();
        var user = new User(ev.target.userName.value, ev.target.userURL.value, ev.target.userColor.value, ev.target.yearOfBirth.valueAsNumber);
        var root = document.querySelector(".root");
        if (user) {
            user === null || user === void 0 ? void 0 : user.renderUser(root);
            users.push(user);
        }
    }
    catch (error) {
        console.error(error);
        return;
    }
}
