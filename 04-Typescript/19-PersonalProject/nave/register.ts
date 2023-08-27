const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', handleRegistrationFormSubmit);

function handleRegistrationFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const passwordInput = document.querySelector('#password-input');

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const existingUser = JSON.parse(localStorage.getItem('user'));

  if (existingUser && existingUser.email === email) {
    alert('You are already registered.'); // Display message if user is already registered
  } else {
    const user = { name, email, password };

    // Save the user details in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to dashboard page
    window.location.href = 'login.html';
  }
}
function redirectToLoginPage() {
  window.location.href = 'login.html';
}