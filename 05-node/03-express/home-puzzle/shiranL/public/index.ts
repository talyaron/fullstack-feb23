const getName = async () => {
    const response = await fetch("/name");
    const data = await response.json();
    document.querySelector("#name").innerHTML = data.name;
  };
  
  getName();
  
  async function handleLogin(ev) {
     ev.preventDefault();
    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;
    const user = { username, password };
  
    const response = await fetch("/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  
    const data = await response.json();
  debugger
    if (data.success) {
      console.log('Login success');
    } else {
        console.log('Login failed');
    }
  }
  