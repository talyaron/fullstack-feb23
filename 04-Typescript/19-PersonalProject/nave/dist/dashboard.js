var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', handleLoginFormSubmit);
function handleLoginFormSubmit(event) {
    event.preventDefault();
    var emailInput = document.querySelector('#email-input');
    var passwordInput = document.querySelector('#password-input');
    var email = emailInput.value;
    var password = passwordInput.value;
    var user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Invalid email or password. Please try again.');
    }
}
