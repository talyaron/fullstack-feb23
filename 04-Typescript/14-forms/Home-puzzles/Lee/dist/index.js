// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
var root = document.querySelector("#root");
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
        this.id = "id-" + Math.random();
    }
    return User;
}());
var userArray = new Array();
function handleSubmitForm(ev) {
    ev.preventDefault();
    // console.log(ev.target.elements.userName.value)
    var userName = ev.target.elements.userName.value;
    var newUser = new User(userName);
    console.log(newUser);
    userArray.push(newUser);
    console.log(userArray);
    render(userArray);
}
function render(users) {
    try {
        var html = "";
        if (userArray.length > 0) {
            html = users.map(function (user) {
                return "<div class=\"root__userElement\">\n            <h1>" + user.userName + "</h1>\n            <h3>The ID of user is: " + user.id + "</h3>\n            <button class=\"root__btn\">Change Color</button>\n            </div>";
            }).join(" ");
        }
        else {
            html = "No data";
        }
        console.log(html);
        root.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
render(userArray);
