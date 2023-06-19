// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
var User = /** @class */ (function () {
    function User(userName, imgUrl, preferdColor, year) {
        this.userName = userName;
        this.imgUrl = imgUrl;
        this.preferdColor = preferdColor;
        this.year = year;
    }
    return User;
}());
var Users = [];
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var username = ev.target.elements.userName.value;
        var imgUrl = ev.target.elements.imgUrl.value;
        var year = ev.target.elements.year.valueAsNumber;
        var color = ev.target.elements.preferdColor.value;
        var person = new User(username, imgUrl, color, year);
        console.log(person);
    }
    catch (error) {
        console.error(error);
    }
}
