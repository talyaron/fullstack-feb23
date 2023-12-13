import React, { useState, useEffect } from "react";

interface PasswordProps {
  password: string;
  setPasswordOnInput: (passwordValue: string) => void;
}

const Password: React.FC<PasswordProps> = ({ password, setPasswordOnInput }) => {
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

  return (
    <div>
  <input
    className="inputPassword"
    type={visible ? "text" : "password"}
    id="password"
    placeholder="password"
    value={password}
    onInput={(ev) => {
      setPasswordOnInput((ev.target as HTMLInputElement).value);
    }}
  />
  <button type="button"  className="viewPassword" onClick={() => setVisbile(!visible)}>
    {visible ? (
      <span className="material-icons" style={{ color: '#6467D4', fontSize: '20px', margin: '0 0px',padding:"0px",backgroundColor:"white" }}>visibility</span>
    ) : (
      <span className="material-icons" style={{ color: '#6467D4', fontSize: '20px', margin: '0 0px',padding:"0px",backgroundColor:"white" }}>visibility_off</span>
    )}
  </button>
  <input
    className="inputLogin"
    type="text"
    id="confirmPassword"
    placeholder="confirm password"
    value={confirmPassword}
    onInput={(ev) => {
      setConfirmPassword((ev.target as HTMLInputElement).value);
    }}
  />
  <p className="match">{match ? "passwords match!" : "passwords do not match!"}</p>
</div>
  );
};

export default Password;
