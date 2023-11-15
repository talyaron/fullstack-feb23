import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import { list } from "./util/list";

function App() {
  return (
    <div className="App">
      <Title color="red">Test</Title>
      <Title color="blue"><p>this is p</p></Title>
      {list.map((title) => { return <Title color="aqua">{title}</Title>})}
    </div>
  );
}

export default App;
