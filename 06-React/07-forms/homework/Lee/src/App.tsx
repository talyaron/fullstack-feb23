import React, { useEffect } from "react";
import Login from "./components/Login";
import Posts from "./components/Posts";

function App() {
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const userToken = sessionStorage.getItem("userToken");

    if (userId && userToken) {
      setSuccess(true);
    }
  }, []);

  console.log("Success state:", success);

  return (
    <main className="App">
      {success ? <Posts /> : <Login onSuccess={() => setSuccess(true)} />}
    </main>
  );
}

export default App;
