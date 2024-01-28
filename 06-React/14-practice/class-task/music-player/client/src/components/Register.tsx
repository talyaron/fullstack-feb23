import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUser, registerUser } from "../API/userApi/registerApi"
import myImg from "../images/Happy girl wearing headphones.jpg"
import Password from "./Password"


const RegisterForm: React.FC = () => {
  // const dispatch = useDispatch()
  // const user = useAppSelector(userSelector)
  const [user_name, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [match, setMatch] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleGetUser = async () => {
    setLoading(true)
    const data = await getUser()
    if (data) {
      setLoading(false)
      navigate("/home-page")
    }
    setLoading(false)
  }
  const handleSubmit = async () => {
    if (match) {
      const success = await registerUser({ user_name, password })

      if (success) {
        navigate("/home-page")
        console.log("Registration successful!")
      } else {
        console.error("Registration failed.")
      }
    }
  }
  useEffect(() => {
    handleGetUser()
  }, [])

  return (
    <div className="registerDiv">
      {loading ? <>Loading</> : null}
      <div className="formContainer">
        <p className="appName">Multi Musix</p>
        <h2 className="loginHeader">Register</h2>
        <form
          className="registerForm"
          action=""
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit()
          }}
        >
          <input
            type="text"
            className="inputUserName"
            placeholder="username"
            value={user_name}
            onInput={(ev) => setUsername((ev.target as HTMLInputElement).value)}
          />
          <Password
            password={password}
            setPassword={setPassword}
            setMatch={setMatch}
            match={match}
          />
          <button className="registerBtn" type="submit">
            Register
          </button>
        </form>
        <p className="decoration">
          -------------------- o ---------------------
        </p>
        <button className="signupBtn">
          <Link to="/login-page" >Login</Link>
        </button>

      </div>
      <div className="imageContainer">
        <img src={myImg} className="imgRegister" alt="My Image" />
      </div>
    </div>
  )
}

export default RegisterForm