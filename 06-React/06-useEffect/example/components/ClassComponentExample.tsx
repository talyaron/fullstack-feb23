import React, { Component, ReactNode } from "react";

type MyProps = any;
type MyState = {
  count: number;
  firstName: string;
};

class CounterClass extends Component<MyProps, MyState> {
  state = {
    count: 0,
    firstName: "gili",
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleNameChange = () => {
    const newName = prompt("enter new name");
    if (!newName) {
      this.setState(() => ({ firstName: "you must enter a name" }));
    } else {
      this.setState(() => ({ firstName: newName }));
    }
  };


  render(): ReactNode {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Add in class</button>
        <p>{this.state.firstName}</p>
        <button onClick={this.handleNameChange}>Change name</button>
      </>
    );
  }
}

export default CounterClass;
