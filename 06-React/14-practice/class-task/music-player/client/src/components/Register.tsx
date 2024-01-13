import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, resetRegistration, RootState } from "../features/user/userRegisterSlice";
import Password from "./Password";
import { registerUser } from "../API/registerApi/registerApi";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { username, email, password } = useSelector((state: RootState) => state.userRegistration);

  const handleRegistration = async () => {
    const success = await registerUser({ username, email, password });

    if (success) {
      console.log("Registration successful!");
      dispatch(resetRegistration());
    } else {
      console.error("Registration failed.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <Password />
      <button type="button" onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
