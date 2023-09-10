async function handleSignIn(event: any) {
  try {
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
    const messageRoot = document.querySelector("#message");

    if (result.message === "user does not exist, please register") {
      messageRoot.innerHTML = `<h3>${result.message}</h3><a href="/register.html"><button>REGISTER NOW</button></a>`;
    } else if (result.message === "Please complete all fields") {
      alert(`${result.message}`);
    } else if (
      result.error === "Incorrect password, please try again or register"
    ) {
      messageRoot.innerHTML = `<h3>${result.error}</h3><a href="/register.html"><button>REGISTER NOW</button></a>`;
    } else {
      window.location.href = `/index.html?userName=${result.userName}`;
    }
  } catch (error) {
    console.error(error);
  }
}
