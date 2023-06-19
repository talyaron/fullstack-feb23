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
        debugger;
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
    function UserName(userName, imgUrl, color, dateOfBirth // public age: Function
    ) {
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
    if (!userDetails)
        throw new Error("user's details not found");
    if (cardsWrapper) {
        cardsWrapper.innerHTML += "<div class=\"card\" id=\"" + userDetails.color + "\">\n      <div class=\"card_img\"><img src=\"" + userDetails.imgUrl + "\" alt=\"\" /></div>\n      <div class=\"card_user-details\"><h3>Name: " + userDetails.userName + "<br>Age: " + userDetails.age(userDetails.dateOfBirth) + "</h3></div>\n    </div>";
    }
    var usersColor = document.querySelector(userDetails.color);
    if (usersColor) {
        usersColor.style.backgroundColor = userDetails.color;
    }
    debugger;
}
