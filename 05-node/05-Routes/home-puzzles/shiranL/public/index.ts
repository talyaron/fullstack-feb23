import { User } from "../API/users/usersModel";

async function handleLogin(event: any) {
    try {
      event.preventDefault();
      const userName = event.target.userName.value;
      const password = event.target.password.value;
      
      if (!userName || !password) {
        throw new Error('Please complete all fields');
      }
  
      const user: User =new User(userName, password);
  
      const response = await fetch('/API/users/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      const result = await response.json();
      console.log(result);
  
  
    } catch (error) {
      console.error(error);
    }
  
  }