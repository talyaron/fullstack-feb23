import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { userSelector } from "../features/user/userSlice";
import Password from "./Password";
import { registerUser } from "../API/registerApi/registerApi";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(userSelector)
  const [user_name, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [match, setMatch] = useState(false);

  const handleSubmit = async () => {
    console.log(user_name)
    console.log(password)
    console.log(match)
      if (match) {
const success = await registerUser({user_name, password});

    if (success) {
      console.log("Registration successful!");
    } else {
      console.error("Registration failed.");
    }
  }}
    
    

  return (
    <div className="registerDiv">
    <p className="appName">Multi Musix</p>
    <h2 className="loginHeader">Login</h2>
    <form
  action=""
  onSubmit={(event) => {
    handleSubmit();
  }}
>
     
      <input
        type="text"
        placeholder="username"
        value={user_name}
        onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}
      // value={user?.username}
      // onChange={(e) => dispatch(setUser(e.target.value))}
      />

      <Password password={password} setPassword={setPassword} setMatch={setMatch} match={match} />
      <button className="registerBtn" type="submit">
    Register
  </button>
    </form>
    <p className="decoration">
  {" "}
  -------------------- o ---------------------
</p>
<button className="signupBtn">Signup</button>
</div>
    
  );
};

export default RegisterForm;

