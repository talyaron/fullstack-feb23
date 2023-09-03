async function handleRegister(event) {
    try {
      event.preventDefault();
      const user = {password: event.target.password.value, email: event.target.email.value,};
  
      const response = await fetch("/API/users/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
      });
      const { error } = await response.json();
      console.log(error);
      if (error) {
        throw new Error(error);
      }
      window.location.href = "/login.html";
    } catch (error) {
      console.error(error);
    }
  }
  