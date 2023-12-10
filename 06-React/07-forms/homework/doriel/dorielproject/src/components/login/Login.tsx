import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://dummyjson.com/users";

  const fetchApi = async () => {
    try {
      const response = await fetch(apiUrl);
      const { users } = await response.json();

      const isValidUser = users.some(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );

      if (isValidUser) {
        localStorage.setItem("username", username);
        navigate("./homepage");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error fetching API data", error);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <div>
      <p>My app</p>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete=""
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete=""
        />
        <button type="submit">Login</button>
      </form>
      <button>Forgot your password?</button>
      <div />
      <button>Signup</button>
    </div>
  );
};
