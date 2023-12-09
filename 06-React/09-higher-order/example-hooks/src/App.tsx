import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterClick from "./components/CounterClick";
import CounterHover from "./components/CounterHover";

function App() {
  return (
    <>
      <CounterClick />
      <CounterHover/>
    </>
  );
}

export default App;
