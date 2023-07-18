var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var User = /** @class */ (function () {
    function User(username, Password, email) {
        this.username = username;
        this.Password = Password;
        this.email = email;
        this.username = username;
        this.Password = Password;
        this.email = email;
        this.id = uid();
    }
    return User;
}());
var users = [];
function userLogin(ev) {
    ev.preventDefault();
    var username = ev.target.Username.value;
    var password = ev.target.Password.value;
    // ev.Username.target.value
    // const storedUser = localStorage.getItem('users')||[];
    var StoredUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userverification = StoredUsers.some(function (user) { return user.username === username && user.Password === password; });
    console.log(StoredUsers);
    if (userverification) {
        // Login successful
        console.log('Login successful');
        location.href = "main.html";
    }
    else {
        // Invalid credentials
        console.log('Invalid username or password');
    }
}
function UserRegister(ev) {
    ev.preventDefault();
    var username = ev.target.Username.value;
    var password = ev.target.Password.value;
    var passwordtest = ev.target.PasswordTest.value;
    var email = ev.target.Email.value;
    if (password !== passwordtest) {
        return prompt("password dooes not match");
    }
    var newUser = new User(username, password, email);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}
