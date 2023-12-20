// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "../src/components/user/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
