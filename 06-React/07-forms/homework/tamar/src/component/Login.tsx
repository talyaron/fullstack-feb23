import './dist/login.css'

const handleLogin = () => {

}

const Login = () => {
    return (
        <div className='loginbody'>
            <header>App name</header>
            <h2 className='textcolorperpul'>Login</h2>
            <form>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='username' />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password' />
                <button onClick={handleLogin} id='loginBTN, center'>Login</button>
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