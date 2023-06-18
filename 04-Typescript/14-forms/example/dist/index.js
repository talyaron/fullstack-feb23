function handleInput(event) {
    console.dir(event);
    console.log(event.target.value);
    var root = document.querySelector('#root');
    if (root) {
        root.innerHTML = event.target.value;
    }
}
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var password = ev.target.password.value;
        var date = new Date(ev.target.date.value);
        var age = ev.target.age.valueAsNumber;
        var result = { age: age, date: date, password: password, username: username };
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
function handleColor(ev) {
    try {
        document.body.style.backgroundColor = ev.target.value;
    }
    catch (error) {
        console.error(error);
    }
}
