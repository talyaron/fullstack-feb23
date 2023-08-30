async function handleSignIn(event: any) {
  try {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(user);

    const response = await fetch("/API/users/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    console.log(result);
    const messageRoot = document.querySelector("#message");
    if (result.error === "email or password are incorrect") {
      messageRoot.innerHTML = `<h3>${result.error}</h3><a href="/register.html"><button>REGISTER NOW</button></a>`;
    } else {
      window.location.href = "/tasks.html";
    }
  } catch (error) {
    console.error(error);
  }
}
