var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
var users = [];
console.log(users);
// Get users from local storage
var usersString = localStorage.getItem('users');
console.log(usersString);
if (usersString) {
    // Convert string to array
    var usersArray = JSON.parse(usersString);
    console.log(usersArray);
    usersArray.forEach(function (user) {
        return users.push(new User(user.name, user.email, user.password));
    });
    console.log(users);
    renderUsers();
}
function handleAddUser(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var email = ev.target.email.value;
        var password = ev.target.password.value;
        var nameRoot = document.querySelector('#rootName');
        if (!nameRoot)
            throw new Error('couldnt find rootName html element');
        checkUserExists(name, email, password);
        renderUsers();
        ev.target.reset();
        var usersJson = JSON.stringify(users);
        localStorage.setItem('users', usersJson);
    }
    catch (error) {
        console.error(error);
    }
}
function checkUserExists(name, email, password) {
    var existingUser = users.find(function (user) { return user.name === name && user.email === email; });
    if (existingUser) {
        alert('User already exists');
    }
    else {
        users.push(new User(name, email, password));
    }
}
function renderUsers() {
    var html = "<div dir=\"rtl\" class=\"row\">\n  <div class=\"columna\">\n      <h1 class=\"heading\">   \u05D0\u05D9\u05D6\u05D4 \u05DB\u05D9\u05E3 \u05E9\u05E0\u05E8\u05E9\u05DE\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5 " + users[users.length - 1].name + " </h1> \n         <p class=\"p\"> \u05DE\u05D4\u05D9\u05D5\u05DD \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05E1\u05D3\u05E8 \u05D1\u05D7\u05E9\u05D1\u05D5\u05DF \u05D4\u05D1\u05E0\u05E7 ! </p>\n        <button class=\"button\" onclick=\"document.location='../home-page/homepage.html'\">\u05DB\u05E0\u05D9\u05E1\u05D4 ></button>\n    </div>\n        </div>";
    var nameRoot = document.querySelector('#rootName');
    if (!nameRoot)
        throw new Error('couldnt find rootPersons html element');
    nameRoot.innerHTML = html;
}
