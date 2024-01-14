import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../features/user/userSlice";
import Password from "./Password";
import { registerUser } from "../API/registerApi/registerApi";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(userSelector)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [match, setMatch] = useState(false);

  const handleSubmit = async () => {
    console.log(username)
    console.log(password)
    console.log(match)
      if (match) {
const success = await registerUser({username, password});

    if (success) {
      console.log("Registration successful!");
    } else {
      console.error("Registration failed.");
    }
  }}
    
    

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}
      // value={user?.username}
      // onChange={(e) => dispatch(setUser(e.target.value))}
      />

      <Password password={password} setPassword={setPassword} setMatch={setMatch} match={match} />
      <button type="button" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
