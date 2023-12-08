import React from "react";
import Login from "./components/Login";
import Posts from "./components/Posts";

function App() {
  const [success, setSuccess] = React.useState(false);

  return (
    <main className="App">
      {success ? <Posts /> : <Login onSuccess={() => setSuccess(true)} />}
    </main>
  );
}

export default App;
