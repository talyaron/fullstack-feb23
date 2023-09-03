async function handleRegister(event: any) {
  try {
    debugger;
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
    const result = await response.json();
    console.log(result);
    if (result.message === "User added successfully") {
      window.location.href = `/index.html?email=${result.email}`;
    } else {
      document.querySelector("#message").innerHTML = result.message;
    }
  } catch (error) {
    console.error(error);
  }
}
