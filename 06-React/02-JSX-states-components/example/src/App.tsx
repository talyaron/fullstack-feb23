import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Article from "./components/Article/Article";

function App() {
  return (
    <div>
     <Article/>
     <Article/>
     <Article/>
     <article className="article">hello</article>
    </div>
  );
}

export default App;
