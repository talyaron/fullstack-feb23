import React, { useEffect, useState } from "react"
import Password from "./Password"
import { getUser, registerUser } from "../API/userApi/registerApi"
import myImg from "../images/Happy girl wearing headphones.jpg"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../API/userApi/loginApi"


const LoginForm: React.FC = () => {
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
    const handleLogin = async () => {
        if (match) {
            const success = await loginUser({ user_name, password })
            if (success) {
                console.log("Login successful!")
            } else {
                console.error("Login failed.")
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
                <h2 className="loginHeader">Login</h2>
                <form
                    className="registerForm"
                    action=""
                    onSubmit={(event) => {
                        event.preventDefault()
                        handleLogin()
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
                <button className="signupBtn">Register</button>
            </div>
            <div className="imageContainer">
                <img src={myImg} className="imgRegister" alt="My Image" />
            </div>
        </div>
    )
}

export default LoginForm