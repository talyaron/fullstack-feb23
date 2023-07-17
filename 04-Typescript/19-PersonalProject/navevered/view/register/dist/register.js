var registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener("submit", handleRegistrationFormSubmit);
function handleRegistrationFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.querySelector("#name-input");
    var emailInput = document.querySelector("#email-input");
    var passwordInput = document.querySelector("#password-input");
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
        alert("You are already registered.");
    }
    else {
        var user = { name: name, email: email, password: password };
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "login.html";
    }
}
var registrationForm = document.querySelector('#registration-form');
// Add an event listener to the form's submit event
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submit behavior
    // Perform any necessary registration logic here
    // Redirect to the login page
    window.location.href = '../login/login.html';
});
