import React, { useRef, useState, useEffect } from "react";
import { authenticateUser } from "../api/usersApi";
// import "../dist/login.css";
import "../login.scss";
import { useAuth } from "../context/AuthContext";
import { AxiosError } from "axios";

const Login = (): JSX.Element => {
  // const { setAuth } = useAuth();
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await authenticateUser(user, pwd);
      console.log(data)
      const {token, id} = data;

      if(!token || !id) {
        throw new Error("no id or token received in handleSubmit at Login.tsx")
      }

      // setAuth({ user, id, token });
      setUser("");
      setPwd("");
      setSuccess(true);

      sessionStorage.setItem("userId", id.toString());
      sessionStorage.setItem("userToken", token);
    } catch (err: any) {
      console.log(err)
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Invalid Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        console.error("Login Error:", err);
        setErrMsg("Login Failed. Please try again.");
        errRef.current?.focus();
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <p>Lee's App</p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder=" Username"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <span
                className="material-symbols-outlined eye-icon"
                onClick={handleTogglePassword}
              >
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </div>
            <button>Login</button>
            <p id="reset">Forgot your password?</p>
          </form>
          <div className="signup-stripe"></div>
          <button id="signup">Signup</button>
        </section>
      )}
    </>
  );
};

export default Login;
