function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
var email = getEmailFromQuery();
console.log(email);
