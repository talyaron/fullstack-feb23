
const _users:User[] = getUsers();
console.log(_users);
function handleLogin(event: any) {
    event.preventDefault();

    console.log("Login");
    const nameOfUser = event.target.name.value;
    _users.push(new User(nameOfUser));
    console.log(JSON.stringify(_users));
    localStorage.setItem("users", JSON.stringify(_users));
    window.location.href = '../home/home.html';
}