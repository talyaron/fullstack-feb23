import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import "../dist/login.css";

const LOGIN_URL = "/auth";

const Login = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
        errRef.current?.focus();
      }
    }
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
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <input
              type="password"
              id="password"
              placeholder=" Password"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <button>Login</button>
          </form>
          <p>Signup</p>
        </section>
      )}
    </>
  );
};

export default Login;
