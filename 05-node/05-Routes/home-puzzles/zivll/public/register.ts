async function handleRegister(event) {
  try {
    console.dir(event);

    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const response = await fetch("/API/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error(error);
  }
}
