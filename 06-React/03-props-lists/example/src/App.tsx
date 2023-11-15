import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";


function App() {
  const testHeader = "gili"
  return (
    <div className="App">
      <Title header="this is title"/>
      <Title header="hello"/>
      <Title header="world"/>
      <Title header={testHeader}/>
    </div>
  );
}

export default App;
