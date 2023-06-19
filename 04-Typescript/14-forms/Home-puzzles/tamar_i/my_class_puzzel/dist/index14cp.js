//create a form for user profile (with name, image (url), preferd color, year of birth)
//On submit, add the new profiles in to an array of class User
//Render all instances of user into cards of profiles.
//step 1:
//bild a class for user
var User = /** @class */ (function () {
    function User(username, imageUrl, preferdColor, yearOfBirth) {
        this.username = username;
        this.imageUrl = imageUrl;
        this.preferdColor = preferdColor;
        this.yearOfBirth = yearOfBirth;
    }
    User.prototype.calculateAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    User.prototype.renderCards = function (root) {
        try {
            if (!root)
                throw new Error("missing root element");
            var cardstoHTML = "<div class = 'wrapper' color=\"" + this.preferdColor + "\">";
            cardstoHTML = cardstoHTML + usersArray.map(function (card) {
                return "<p>name: " + card.username + ".</p> <img src=" + card.imageUrl + ">  <p>age:" + card.yearOfBirth;
            }).join("");
            cardstoHTML += "</div>";
        }
        catch (error) {
            console.error(error);
        }
    };
    return User;
}());
// bild an array of this class
var usersArray = [];
//bild a function that get the data from the user and put it in the class and store the new class into the array
function handleSubmit(event) {
    try {
        event.preventDefault();
        var username = event.target.username.value; //the name after the target mast be the same as in the name defined in the HTML!
        console.log(username);
        var imageUrl = event.target.imageUrl.value;
        var preferdColor = event.target.preferdColor.value;
        var yearOfBirth = event.target.yearOfBirth.value;
        var newUser = new User(username, imageUrl, preferdColor, yearOfBirth);
        console.log(newUser);
        usersArray.push(newUser);
        console.dir(usersArray);
        styleCard();
    }
    catch (error) {
        console.log(error);
    }
}
//step 2:
//criate a card (css)
function styleCard() {
    if (root) {
        root.style.width = '100%';
        var wrapper = root.querySelectorAll('.wrapper');
        debugger;
        wrapper.forEach(function (wrapper) {
            var color = wrapper.getAttribute('color');
            if (color) {
                wrapper.style.backgroundColor = color;
            }
        });
    }
}
//put the data from the user on the card
var root = document.querySelector(".root");
//show the card onscreen
//step 3:
//show all users that store in the array as carsd on-screen