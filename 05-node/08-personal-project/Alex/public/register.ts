async function handleRegister(ev: any) {
  try {
    ev.preventDefault(); // stop form from submitting
    const user = {
      // get data from form
      password: ev.target.password.value,
      email: ev.target.email.value,
      userName: ev.target.userName.value,
    };

    const response = await fetch("/API/users/register", {
      // send data to server
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const { error, userDB} = await response.json(); // get data from server
    console.log(userDB);
    if (error) {
      throw new Error(error);
    }
    //if everthink is OK, redirect to login page
    window.location.href = "/orders.html";
  } catch (error) {
    console.error(error);
  }
}
