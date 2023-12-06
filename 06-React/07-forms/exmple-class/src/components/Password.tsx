import React, { useState, useEffect } from "react";

export const Password = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [visible, setVisbile] = useState(false);
  const [match, setMatch] = useState(false);

  const validate = () => {
    if (password == confirmPassword) {
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
          setPassword((ev.target as HTMLInputElement).value);
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
      <p>{match ? "password are matched!" : "not Matched!"}</p>
    </div>
  );
};
