async function handleRegister(event: any) {
  try {
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
    if (result.message === "user added succsesfully") {
      window.location.href = "/tasks.html";
    } else {
      document.querySelector("#message").innerHTML = result.message;
    }
  } catch (error) {
    console.error(error);
  }
}
