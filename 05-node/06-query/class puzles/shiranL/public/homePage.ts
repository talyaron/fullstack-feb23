// get email from url
function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
// render hello user
function renderHelloUser() {
    const email = getEmailFromQuery();
    const helloUser = document.getElementById("helloUser");
    helloUser.innerHTML = `Hello ${email}`;
}