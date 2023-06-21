var Member = /** @class */ (function () {
    function Member(userName, age, picture) {
        this.userName = userName;
        this.age = age;
        this.picture = picture;
    }
    return Member;
}());
var arrayOfMemeber = new Array();
function createUser(event) {
    try {
        event.preventDefault();
        console.dir(event);
        var username = event.target.username.value;
        var age = event.target.age.valueAsNumber;
        var picture = event.target.userPic.value;
        var user = new Member(username, age, picture);
        arrayOfMemeber.push(user);
        UserObject(user);
    }
    catch (error) {
        console.error(error);
    }
}
function UserObject(user) {
    try {
        var profiles = document.querySelector("#profile");
        if (!profiles)
            throw new Error("Missing information");
        profiles.innerHTML += "<div id=\"" + arrayOfMemeber.length + "\" class=\"profile\">\n        <div class=\"userName\">Name: " + user.userName + "</div>\n        <div class=\"age\">Age: " + user.age + "</div>\n        <img class=\"image\" src=\"" + user.picture + "\"> </div> ";
    }
    catch (error) {
        console.error(error);
    }
}
