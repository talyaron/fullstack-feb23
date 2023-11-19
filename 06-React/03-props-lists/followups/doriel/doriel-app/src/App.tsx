import './App.css';
import Login from './Login';
import Welcome from './Welcome';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('username');

  return <>
  <div>
  {isLoggedIn ? <Welcome /> : <Login />}
  </div>
  </>;
};

export default App;
