import React, { useEffect } from "react";
import Login from "./components/Login";
import Posts from "./components/Posts";

function App() {
  const [success, setSuccess] = React.useState(false);

  // Check for session data on each re-render
  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const userToken = sessionStorage.getItem("userToken");

    if (userId && userToken) {
      setSuccess(true);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  console.log("Success state:", success);

  return (
    <main className="App">
      {success ? <Posts /> : <Login onSuccess={() => setSuccess(true)} />}
    </main>
  );
}

export default App;
