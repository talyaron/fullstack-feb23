//create a form for user profile (with name, image (url), preferd color, year of birth)
//On submit, add the new profiles in to an array of class User
//Render all instances of user into cards of profiles.
//step 1:
//bild a class for user
var User = /** @class */ (function () {
    function User(username, urlimg, peColor, yearOfBirth) {
        this.username = username;
        this.urlimg = urlimg;
        this.peColor = peColor;
        this.yearOfBirth = yearOfBirth;
    }
    User.prototype.calculateAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return User;
}());
// bild an array of this class
var usersArray = [];
//bild a function that get the data from the user and put it in the class and store the new class into the array
function handleSubmit(event) {
    try {
        event.preventDefault();
        var username = event.target.username.value;
        console.log(username);
        var urlimg = event.target.urlimg.value;
        var peColor = event.target.peColor.value;
        var yearOfBirth = event.target.yearOfBirth.value;
        usersArray.push(new User(username, urlimg, peColor, yearOfBirth));
        console.dir(usersArray);
    }
    catch (error) {
        console.log(error);
    }
}
//step 2:
//criate a card (css)
//put the data from the user on the card
//show the card onscreen
//step 3:
//show all users that store in the array as carsd on-screen
