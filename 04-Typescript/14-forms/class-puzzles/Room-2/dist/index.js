// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var username = ev.target.username.value;
        var imgURL = ev.target.imgURL.value;
        var birthYear = ev.target.birthYear.value;
        var result = { username: username, imgURL: imgURL, birthYear: birthYear };
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
