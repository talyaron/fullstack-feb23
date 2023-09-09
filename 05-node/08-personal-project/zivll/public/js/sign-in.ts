async function handleSignIn(event: any) {
  try {
    debugger;

    event.preventDefault();
    const userName = event.target.userName.value;
    const password = event.target.password.value;

    const response = await fetch("/API/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userName: userName, password: password }),
    });
    const result = await response.json();
    console.log(result);

    console.log(result);
    const messageRoot = document.querySelector("#message");
    if (result.error === "email or password are incorrect") {
      messageRoot.innerHTML = `<h3>${result.error}</h3><a href="/register.html"><button>REGISTER NOW</button></a>`;
    } else {
      window.location.href = `/index.html?userName=${result.userName}`;
    }
  } catch (error) {
    console.error(error);
  }
}
