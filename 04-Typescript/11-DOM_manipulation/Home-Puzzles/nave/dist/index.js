var User = /** @class */ (function () {
    function User(name, img) {
        this.name = name;
        this.img = img;
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
    .map(function (car) {
    return "<div><img src =" + User.img + "><p>User:" + User.name + "</p></div>";
})
    .join(" ");
console.log(usersHTML);
if (content) {
    content.innerHTML = usersHTML;
}
