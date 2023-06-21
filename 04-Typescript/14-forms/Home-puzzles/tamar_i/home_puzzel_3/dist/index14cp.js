//from tal
// MVC - Model View Controller
//data (Model)
var User = /** @class */ (function () {
    function User(userName, yearOfBirth, color, picture) {
        this.userName = userName;
        this.yearOfBirth = yearOfBirth;
        this.color = color;
        this.picture = picture;
        this.id = "id-" + Math.random();
    }
    User.prototype.age = function () {
        var age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    };
    return User;
}());
//keep all users
var userArray = new Array();
//GUI - get from user
//controler - handle the data and add to the model
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var picture = ev.target.userPic.value;
        var yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        var color = ev.target.color.value;
        var user = new User(username, yearOfBirth, color, picture);
        //get data and store it in the users' array
        userArray.push(user);
        //render the data to the DOM
        renderCards(userArray, document.querySelector("#cards"));
    }
    catch (error) {
        console.error(error);
    }
}
//controler - handle the data and render to the DOM
function renderCards(users, element) {
    try {
        if (!element)
            throw new Error("element is not defined");
        var html = users.map(function (user) { return renderCard(user); }).join(" "); //users.map go all over the array, and randerCard is go unside every cell to render it
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//
function renderCard(user) {
    try {
        var html = "<div id=\"" + user.id + "\" class=\"card\" style=\"background-color:" + user.color + "\">\n                    <div class=\"userName\">Name: " + user.userName + "</div>\n                    <div class=\"age\">Age: " + user.age() + "</div>\n                    <img class=\"image\" src=\"" + user.picture + "\">\n            </div>;\n            <form onSubmit=\"updateInfo(event)\">\n                <input type=\"text\" name=\"username\" required placeholder=\"username\">\n                <input type=\"number\" name=\"yearOfBirth\" required placeholder=\"Year of birth\">\n                <input type=\"text\" name=\"userPic\" required  placeholder=\"image url\">\n                <input type=\"color\" name=\"color\" required>\n                <button type=\"submit\">Update Information</button>\n            </form>";
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
//continue to mission 3
