import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";

function App() {
  return (
    <div className="App">
      <h1>Auction</h1>
      <Person1 />
      <Person2 />
      <Person3/>
    </div>
  );
}

export default App;

// accept a Component as an argument
// const withSomeLogic = (Component) => {
// do something

// return a component that renders the component from the argument
// return (props) => <Component {...props} />;
// };

// Updated component = HOC(react component)
// superman = Suit(Clark)
// batman = Suit(bruce)