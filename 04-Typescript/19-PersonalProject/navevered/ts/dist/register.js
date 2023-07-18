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
        alert("You are already registered."); // Display message if user is already registered
    }
    else {
        var user = { name: name, email: email, password: password };
        // Save the user details in local storage
        localStorage.setItem("user", JSON.stringify(user));
        // Redirect to dashboard page
        window.location.href = "login.html";
    }
}
function redirectToLoginPage() {
    window.location.href = "view/login.html";
}
