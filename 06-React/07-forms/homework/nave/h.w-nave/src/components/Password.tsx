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
        type={visible ? "text" : "password"}
        id="password"
        value={password}
        onInput={(ev) => {
          setPasswordOnInput((ev.target as HTMLInputElement).value);
        }}
      />
      <button onClick={() => setVisbile(!visible)}>SEE</button>
      <input
        type="text"
        id="confirmPassword"
        value={confirmPassword}
        onInput={(ev) => {
          setConfirmPassword((ev.target as HTMLInputElement).value);
        }}
      />
      <p>{match ? "passwords match!" : "passwords do not match!"}</p>
    </div>
  );
};

export default Password;
