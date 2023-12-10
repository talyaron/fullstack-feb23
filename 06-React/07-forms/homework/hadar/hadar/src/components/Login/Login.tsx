import React from "react";
import "./Login.scss";

export const Login = () => {
  async function post() {
    const url = "https://dummyjson.com/users";
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(post());
  return (
    <div>
      <p>App name</p>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="| Email" />
        <input type="password" placeholder="Password" />
        <button className="Login" onClick={post}>
          Login
        </button>
        <button className="FYP">Forget your password?</button>
        <hr />
        <button className="SU">Signup</button>
      </form>
    </div>
  );
};
