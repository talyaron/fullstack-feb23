import './dist/login.css'
import { FC, useState } from "react";
import { getLoginUser } from '../api/userAPI';
import User from './types/type';

// "username": "atuny0",
// "password": "9uQFF1Lh"

interface LoginUserProp {
    handelApprovUser: (ev: User) => void;
}

const Login: FC<LoginUserProp> = ({ handelApprovUser }) => {
    const [userName, setUsername] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const handleLogin = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const respond: User = await getLoginUser(userName, userPassword)
        console.log("at login the respond is:", respond)
        if (!respond) {
            alert('NO USER FOUND!')
            throw new Error("NO USER FOUND!");
        }
        handelApprovUser(respond.id)
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