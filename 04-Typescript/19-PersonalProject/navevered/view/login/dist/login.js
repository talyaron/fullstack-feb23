function loadUsersFromLocal() {
    try {
        var userString = localStorage.getItem("users");
        if (userString)
            return JSON.parse(userString);
        else
            return [];
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());
var usersLoginPage = loadUsersFromLocal();
function handleLoginFormSubmit(event) {
    event.preventDefault();
    try {
        debugger;
        if (User && User === User && usersLoginPage) {
            // Redirect to the registration page
            window.location.href = "../home-page/homepage.html";
        }
        else {
            alert("Invalid email or password. Please try again.");
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
