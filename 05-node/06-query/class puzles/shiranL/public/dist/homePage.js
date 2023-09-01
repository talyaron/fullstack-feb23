// get email from url
function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
// render hello user
function renderHelloUser() {
    var email = getEmailFromQuery();
    var helloUser = document.getElementById("helloUser");
    helloUser.innerHTML = "Hello " + email;
}
