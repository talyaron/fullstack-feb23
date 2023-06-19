// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
// this function includes all user information
var usersArray = [];
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var userName = ev.target.username.value;
        var imgUrl = ev.target.imagUrl.value;
        var color = ev.target.userColor.value;
        var dateOfBirth = ev.target.dateOfBirth.value;
        // console.log(userName);
        usersArray.push(new UserName(userName, imgUrl, color, dateOfBirth));
        console.dir(usersArray);
        // const result = { userName, imgUrl, color, dateOfBirth };
    }
    catch (error) {
        console.error(error);
        return;
    }
}
// this function takes all the info and make it into array
function newUserIntoArray(username) { }
var UserName = /** @class */ (function () {
    function UserName(userName, imgUrl, color, dateOfBirth, age) {
        this.userName = userName;
        this.imgUrl = imgUrl;
        this.color = color;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
    }
    UserName.prototype.age = function (dateOfBirth) {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    return UserName;
}());
// UserName.forEach((element) => {});
