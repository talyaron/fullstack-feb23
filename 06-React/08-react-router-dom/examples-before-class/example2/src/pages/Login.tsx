import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const {data} = await axios.post("https://dummyjson.com/auth/login", {
        username: "kminchelle",
        password: "0lelplR",
      });

      if (data.username) {
        navigate(`/user-page/${data.id}`, {state: {user: data}})
      }

    } catch (error) {
      console.error(error);
    }
  };
  return <div>
    <button onClick={handleLogin}>LOGIN</button>
  </div>;
};

export default Login;
