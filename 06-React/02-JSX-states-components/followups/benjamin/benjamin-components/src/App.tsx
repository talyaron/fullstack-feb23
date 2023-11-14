import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import Article from "./Components/Article/Article";
import Counter from "./Components/Counter/Counter";
import Hovered from "./Components/Hovered/Hovered";
import Alert from "./Components/Alert/Alert";

function App() {
  return (
    <>
      <Alert />
      <Article />
      <Counter />
      <Hovered />
    </>
  );
}

export default App;
