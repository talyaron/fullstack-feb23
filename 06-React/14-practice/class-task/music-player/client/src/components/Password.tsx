// Password.tsx
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  password: string,
  setPassword: Dispatch<SetStateAction<string>>,
  match: boolean,
  setMatch: Dispatch<SetStateAction<boolean>>
}
const Password = ({ password, setPassword, match, setMatch }: Props) => {
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [visible, setVisbile] = useState(false);
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
    setPassword(value);
    // dispatch(setPassword(value));
  };

  const handleVisibilityToggle = () => {
    setVisbile(!visible);
  };

  return (
    <div>
      <div className="password-input-container">
        <input
          className="inputPassword"
          type={visible ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => handlePasswordInput(ev.target.value)}
        />
        <span
          className="material-icons password-icon"
          onClick={handleVisibilityToggle}
        >
          {visible ? "visibility" : "visibility_off"}
        </span>
      </div>
      <div className="password-input-container">

        <input
          type="password" className="inputPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="match">{match ? "Passwords match!" : "Passwords do not match!"}</p>
      </div>
    </div>

  );
};

export default Password;