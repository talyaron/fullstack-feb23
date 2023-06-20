// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
// this function includes all user information
var usersArray = [];
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.username.value;
        var imgUrl = ev.target.imagUrl.value;
        var color = ev.target.userColor.value;
        var dateOfBirth = ev.target.dateOfBirth.value;
        usersArray.push(new UserName(userName, imgUrl, color, dateOfBirth));
        renderUsers(usersArray);
    }
    catch (error) {
        console.error(error);
        return;
    }
}
// this function takes all the info and make it into array
// function newUserIntoArray(username: []) {}
var UserName = /** @class */ (function () {
    function UserName(userName, imgUrl, color, dateOfBirth) {
        this.userName = userName;
        this.imgUrl = imgUrl;
        this.color = color;
        this.dateOfBirth = dateOfBirth;
    }
    UserName.prototype.age = function (dateOfBirth) {
        try {
            var userAge = new Date().getFullYear() - parseInt(dateOfBirth);
            return userAge;
        }
        catch (error) {
            console.error(error);
        }
    };
    return UserName;
}());
function renderUsers(usersDetails) {
    if (usersDetails === void 0) { usersDetails = []; }
    var cardsWrapper = document.querySelector("#cardsWrapper");
    var userDetails = usersDetails.pop();
    var randomNumber = Math.round(Math.random() * 1000);
    if (!userDetails)
        throw new Error("user's details not found");
    if (cardsWrapper) {
        cardsWrapper.innerHTML += "<div class=\"card\" id=\"id-" + randomNumber + "\" style=\"background-color: " + userDetails.color + "\">\n      <div class=\"card_img\"><img src=\"" + userDetails.imgUrl + "\" alt=\"\" /></div>\n      <div class=\"card_user-details\"><h3>\u05E9\u05DD: " + userDetails.userName + "<br>\u05D2\u05D9\u05DC: " + userDetails.age(userDetails.dateOfBirth) + "</h3></div>\n    </div>";
    }
}
