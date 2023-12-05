import React, { useEffect, useState, FC } from "react";
import Password from "./Password";
import { loginUser } from "../api/users";

interface LoginProps {
  onLogin: (userData:User) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);
  const setPasswordOnInput = (passwordValue: string) => {
    setPassword(passwordValue);
  };

  const checkLoginUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const userName = ev.target.userName.value;
    const password = ev.target.password.value;
    const user = await loginUser(userName, password);
    if (user) {
      onLogin(user);
      setAuth(true);
      sessionStorage.setItem("user", user.id || "");
    } else {
      setAuth(false);
      setUserName("");

      setPassword("");
      sessionStorage.setItem("user", "");
    }
  };

  useEffect(() => {
    if (auth) {
    }
  }, [auth]);

  return (
    <>
      <div className="loginDiv">
        <p className="appName">App name</p>
        <h2 className="loginHeader">Login</h2>
        {auth ? <> </> : <span>user name or password are not correct</span>}
        <form
          action=""
          onSubmit={(event) => {
            checkLoginUser(event);
          }}
        >
          <input
            className="inputEmail"
            name="userName"
            type="text"
            placeholder="User-name"
            value={userName}
            onInput={(ev) => {
              setUserName(ev.target.value);
            }}
          />
          <Password
            password={password}
            setPasswordOnInput={setPasswordOnInput}
          />
          <button className="loginBtn" type="submit">
            Login
          </button>
        </form>
        <a href="#">forget your password?</a>
        <p className="decoration">
          {" "}
          -------------------- o ---------------------
        </p>
        <button className="signupBtn">Signup</button>
      </div>
    </>
  );
};

export default Login;
