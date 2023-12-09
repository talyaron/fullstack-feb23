import { useState , FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../passwordInput.scss"

interface PasswordProps{
  password: string;
  setPasswordOnInput:(password:string) => void;
}


const Password:FC<PasswordProps> = ({password, setPasswordOnInput}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className="password-input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="inputPassword"
          name='password'
          value={password}
          onInput={(ev)=>{setPasswordOnInput(ev.target.value)}}
/>
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="password-toggle-icon"
          onClick={togglePasswordVisibility}
        />
      </div>
  );
};

export default Password;
