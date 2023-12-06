import React, { useState } from "react";
import "../api/login.css";

interface LoginProps {
  onLogin: (username: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>Please enter your username to continue</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
