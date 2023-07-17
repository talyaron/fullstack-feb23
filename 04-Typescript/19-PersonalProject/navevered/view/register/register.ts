const registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener("submit", handleRegistrationFormSubmit);

function handleRegistrationFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (existingUser && existingUser.email === email) {
    alert("You are already registered."); 
  } else {
    const user = { name, email, password };

   
    localStorage.setItem("user", JSON.stringify(user));

    
    window.location.href = "login.html";
  }
}
const registrationForm = document.querySelector('#registration-form');

  // Add an event listener to the form's submit event
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit behavior

    // Perform any necessary registration logic here

    // Redirect to the login page
    window.location.href = '../login/login.html';
  });


 


