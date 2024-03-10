import { FC, useState } from 'react'
import { logIn } from '../../api/usersApi'

interface LoginProps {
    onLogin: (userData: any) => void
}

const Login: FC<LoginProps> = ({onLogin}) => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [visible, setVisible] = useState(false)

    const changeVisible = () => {
        setVisible(!visible)

    }

    const handleLogIn = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault()
            const user = await logIn(name, pass)
            if (user) {
                onLogin(user)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <div>
                <p>App name</p>
                <h2>Login</h2>
                <form onSubmit={handleLogIn}>
                    <input type="text" name="username" id="username" value={name}
                        placeholder='| Username' onInput={
                            (ev) => {
                                setName((ev.target as HTMLInputElement).value)
                            }} />
                    <br />
                    <input type={visible ? "text" : "password"} name="password" id="password" value={pass} placeholder='Password' onInput={
                        (ev) => {
                            setPass((ev.target as HTMLInputElement).value)
                        }} />
                    <img onClick={changeVisible} style={{ display: "inline", marginLeft: "-2%", verticalAlign: "middle" }} src={
                        visible ? "https://media.geeksforgeeks.org/wp-content/uploads/20210917150049/eyeslash.png" : "https://media.geeksforgeeks.org/wp-content/uploads/20210917145551/eye.png"}

                        width="1.5%"
                        height="1.5%"
                        alt="eye" />
                    <br />

                    <button type='submit'>Login</button>
                </form>
                <button>Forget your password?</button>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Login