async function handleLogin(event) {
  try {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch("/API/users/login", postInit);
    const { success } = await response.json();
    if (success) {
      window.location.href = `/index.html?email=${email}`;
    }
  } catch (error) {
    console.error(error);
  }
}
