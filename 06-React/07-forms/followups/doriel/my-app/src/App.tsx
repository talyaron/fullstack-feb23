import React, { useState } from "react";
import "./App.css";
import { Product } from "./components/api/products/Product";
import Login from "./components/api/Login";

function App() {
  const [username, setUsername] = useState<string | null>(null);

  const handleLogin = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <>
      <div className="slider-thumb">
        {username ? (
          <div className="welcome-container">
            <h2 className="welcome-message">Welcome, {username}!</h2>
            <Product />
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </>
  );
}

export default App;
