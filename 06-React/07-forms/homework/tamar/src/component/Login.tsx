import './dist/login.css'
import { FC, useState } from "react";
import { getLoginUser } from '../api/userAPI';

interface LoginUserProp {
    handelApprovUser: (ev: any) => void;
}

const Login: FC<LoginUserProp> = ({ handelApprovUser }) => {
    const [userName, setUsername] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const handleLogin = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const respond = getLoginUser(userName, userPassword)
        console.log(respond)
        if (!respond) throw new Error("NO USER FOUND!");
        handelApprovUser(respond)
    }

    return (
        <div className='loginbody'>
            <header>App name</header>
            <h2 className='textcolorperpul'>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='username'
                    value={userName}
                    onInput={(ev) => { setUsername((ev.target as HTMLInputElement).value) }} />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={userPassword}
                    onInput={(ev) => { setUserPassword((ev.target as HTMLInputElement).value) }} />
                <button id='loginBTN, center'>Login</button>
            </form>
            <a>Forget your password?</a>
            <footer>
                <p>--------- o ---------</p>
                <button className='textcolorperpul, btnsignin, center'>Singin</button>
            </footer>
        </div>
    )
}

export default Login