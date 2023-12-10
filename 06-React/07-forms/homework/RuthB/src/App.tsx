import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import PostsList from "./components/PostsList";
import "./login.scss";

function App() {
  const [userId, setUserId] = useState<number>();
  const [user, setUser] = useState<User | null>(null);

  const handleLoginData = (userData: User) => {
    setUser(userData);
    setUserId(userData.id);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("user");
    if (userId) setUserId(parseInt(userId.toString()));
  }, []);
  return (
    // <>{userId == -1 ? <Login onLogin={handleLoginData} /> : <PostsList userId={userId} />}</>
    // <>{userId ? <PostsList userId={userId} /> : <Login onLogin={handleLoginData} />}</>
    <>
      {!userId ? (
        <Login onLogin={handleLoginData} />
      ) : (
        <PostsList userId={userId} />
      )}
    </>
  );
}

export default App;
