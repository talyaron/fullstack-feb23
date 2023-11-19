import React from "react";
import "./App.css";
import {}

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