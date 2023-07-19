var _users = getUsers();
console.log(_users);
function handleLogin(event) {
    event.preventDefault();
    console.log("Login");
    var nameOfUser = event.target.name.value;
    _users.push(new User(nameOfUser));
    console.log(JSON.stringify(_users));
    localStorage.setItem("users", JSON.stringify(_users));
    window.location.href = '../home/home.html';
}
