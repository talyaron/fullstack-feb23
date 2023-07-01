var root = document.querySelector("#root");
var User = /** @class */ (function () {
    function User(userName) {
        this.userName = userName;
        this.id = "id-" + Math.random();
    }
    return User;
}());
//keep all users
var userArray = new Array();
function hendleSubmitForm(ev) {
    ev.preventDefault();
    // console.log(ev)
    // console.log(ev.target)
    // console.log(ev.target.elements)
    // console.log(ev.target.elements.userName)
    // console.log(ev.target.elements.userName.value)
    var userName = ev.target.elements.userName.value;
    var newUser = new User(userName);
    console.log(newUser);
    userArray.push(newUser);
    console.log(userArray);
    render(userArray);
    ev.target.reset();
    console.log(ev);
}
function render(users) {
    try {
        var html = "";
        if (userArray.length > 0) {
            html = users.map(function (user) {
                return "<div class=\"root__userEl\">\n                    <h1>" + user.userName + "</h1>\n                    <h3>The ID of user is: " + user.id + "</h3>\n                    <button style=\"color: red\" onClick=\"changeColor(event)\">Change Color</button>\n                </div>";
            }).join(" ");
        }
        else {
            html = "No Data";
        }
        // console.log(html)
        root.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
render(userArray);
function changeColor(ev) {
    // console.log(`it is changeColor funbction`)
    var randomColors = ["yellow", "red", "blue", "grey", "black"];
    var randomNumber = Math.floor(Math.random() * randomColors.length);
    console.log(ev.target);
    ev.target.style.color = randomColors[randomNumber];
}
