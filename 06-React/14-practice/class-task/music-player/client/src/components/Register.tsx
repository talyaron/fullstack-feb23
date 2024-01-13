// Register.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, resetRegistration, RootState } from "../app/store";
import Password from "./Password";

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state: RootState) => state.userRegistration);

  const handleRegistration = () => {
    // Handle registration logic using the values from the Redux store
    console.log("User Registration:", { username, email });

    // Optionally, reset the registration form after submission
    dispatch(resetRegistration());
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

export default Register;
