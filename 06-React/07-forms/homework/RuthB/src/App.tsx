import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./login.scss";
import Login from "./components/Login";
import PostsList from "./components/PostsList";

function App() {
  const [userId, setUserId] = useState(-1);

  const handleLoginData = (userdata: User) => {
    setUserId(userdata.id);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("user");
    if (userId) setUserId(parseInt(userId.toString()));
  }, []);
  return (
    <>{userId == -1 ? <Login onLogin={handleLoginData} /> : <PostsList />}</>
  );
}

export default App;
