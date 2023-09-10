async function handleRegister(event: any) {
  try {
    event.preventDefault();
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(userName, email, password);

    const response = await fetch("/API/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.message === "User added successfully") {
      window.location.href = `/index.html?userName=${userName}`;
    } else if (result.error === "Please complete all fields") {
      alert(`${result.error}`);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
  }
}
