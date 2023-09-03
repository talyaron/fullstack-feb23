function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
const email = getEmailFromQuery();
console.log(email)