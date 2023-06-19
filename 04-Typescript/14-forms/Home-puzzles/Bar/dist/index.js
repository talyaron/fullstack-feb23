// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
//// complete on your own the class puzzle
// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user
// to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
var User = /** @class */ (function () {
    function User(userName, birthYear, imgURL, favoriteColor) {
        this.userName = userName;
        this.birthYear = birthYear;
        this.imgURL = imgURL;
        this.favoriteColor = favoriteColor;
    }
    return User;
}());
var userArray = new Array();
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var birthYear = ev.target.birthYear.valueAsNumber;
        var imgURL = ev.target.imgURL.value;
        var favoriteColor = ev.target.favoriteColor.value;
        var user = new User(username, birthYear, imgURL, favoriteColor);
        console.log(user);
        userArray.push(user);
        renderCard(user);
    }
    catch (error) {
        console.error(error);
    }
}
// function handleColor(ev:any){
//     try {
//         document.body.style.backgroundColor = ev.target.value;  
//     } catch (error) {
//         console.error(error);
//     }
// }
