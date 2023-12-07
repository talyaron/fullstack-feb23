import React from "react";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <main className="App">
        <Login />
      </main>
    </AuthProvider>
  );
}

export default App;
