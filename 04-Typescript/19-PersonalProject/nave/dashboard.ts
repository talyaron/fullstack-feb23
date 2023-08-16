const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email-input');
  const passwordInput = document.querySelector('#password-input');

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
}