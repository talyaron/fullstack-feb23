import React from "react";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
// import Posts from "./components/Posts";

function App() {
  return (
    // <AuthProvider>
      <main className="App">
        <Login />
      </main>
    // </AuthProvider>

    // <Posts />
  );
}

export default App;
