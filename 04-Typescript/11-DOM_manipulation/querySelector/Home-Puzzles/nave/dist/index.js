var User = /** @class */ (function () {
    function User(name, img) {
        this.name = name;
        this.img = img;
        // this.yearOfBirth = new Date().getFullYear() - age;
    }
    return User;
}());
var users = [
    new User("Itizk", "./dist/close-up-smiling-man-field-sunset.jpg"),
    new User("Sara", "./dist/close-up-smiling-man-field-sunset.jpg"),
    new User("Nave", "./dist/close-up-smiling-man-field-sunset.jpg"),
    new User("Alex", "./dist/close-up-smiling-man-field-sunset.jpg"),
];
var content = document.querySelector("#content");
var usersHTML = users
    .map(function (user) {
    return "<div class='postImg'><img src =" + user.img + "><p>User:" + user.name + "</p></div>";
})
    .join(" ");
console.log(usersHTML);
if (content) {
    content.innerHTML = usersHTML;
}
