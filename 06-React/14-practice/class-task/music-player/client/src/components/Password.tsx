// Password.tsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../app/store"
const Password: React.FC = () => {
    const dispatch = useDispatch();
    const [password, setPasswordValue] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [visible, setVisbile] = useState(false);
    const [match, setMatch] = useState(false);
  
    const validate = () => {
      if (password === confirmPassword) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    };
  
    useEffect(() => {
      validate();
    }, [confirmPassword, password]);
  
    const handlePasswordInput = (value: string) => {
      setPasswordValue(value);
      dispatch(setPassword(value));
    };
  
    const handleVisibilityToggle = () => {
      setVisbile(!visible);
    };
  
    return (
      <div>
        <input
          type={visible ? "text" : "password"}
          placeholder="password"
          value={password}
          onChange={(e) => handlePasswordInput(e.target.value)}
        />
        <button type="button" onClick={handleVisibilityToggle}>
          {visible ? "Hide" : "Show"} Password
        </button>
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="match">{match ? "Passwords match!" : "Passwords do not match!"}</p>
      </div>
    );
  };
  
  export default Password;
