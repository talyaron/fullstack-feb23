import React, { useEffect, useState, FC } from "react";
import Password from "./Password";
import { loginUser } from "../api/users";

interface LoginProps {
  onLogin: (userData: User) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [auth, setAuth] = useState(true);

  const setPasswordOnInput = (passwordValue: string) => {
    setPassword(passwordValue);
  };

  const checkLoginUser = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // const userNameInput = ev.currentTarget.elements.namedItem("userName") as HTMLInputElement | null;
    // const userName = userNameInput?.value || '';

    // const passwordInput = ev.currentTarget.elements.namedItem("password") as HTMLInputElement | null;
    // const password = passwordInput?.value || '';

    const user = await loginUser(userName, password);

    if (user) {
      onLogin(user);
      setAuth(true);
      sessionStorage.setItem("user", JSON.stringify(user)); // Save the entire user object
      sessionStorage.setItem("token", user.token); // Save the user token
    } else {
      setAuth(false);
      setUserName("");
      setPassword("");
      sessionStorage.setItem("user", "");
      sessionStorage.setItem("token", "");
    }
  };

  useEffect(() => {
    if (auth) {
      // Do something if authentication is successful
    }
  }, [auth]);

  return (
    <>
    <div className="wrapper" >
      <div className="loginDiv">
        <p className="appName">App name</p>
        <h2 className="loginHeader">Login</h2>
        {auth ? (
          <></>
        ) : (
          <span className="notCorrect">user name or password are not correct</span>
        )}
        <form className="loginForm"
          action=""
          onSubmit={(event) => {
            checkLoginUser(event);
          }}
        >
          <input
            className="inputLogin"
            name="userName"
            type="text"
            placeholder="User name"
            value={userName}
            onInput={(ev: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(ev.target.value);
            }}
          />
          <Password password={password} setPasswordOnInput={setPasswordOnInput} />

          <button className="loginBtn" type="submit">
            Login
          </button>
        </form>
        <a className="forgetPassword" href="#">forget your password?</a>
        <p className="decoration">
          {" "}
          -------------------- o ---------------------
        </p>
        <button className="signupBtn">Signup</button>
      </div>
      </div>
    </>
  );
};

export default Login;
