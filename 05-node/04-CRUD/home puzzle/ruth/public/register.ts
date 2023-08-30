async function handleRegister(event:any) {
  try {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);//+

    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch("/API/users/add-user", postInit);
    const { success, usersTasks, message } = await response.json();
    console.log(usersTasks);
    console.log(message);

    if (success) {
      window.location.href = "./login.html";
    }
  } catch (error) {
    console.error(error);
  }
}
