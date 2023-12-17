import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import { users } from "./util/users";
import UserCard from "./components/userCard/UserCard";

function App() {
  return (
    <div className="App">
      {users.map((user) => {
        return <UserCard key={user.email} email={user.email} username={user.username} />;
      })}
      {users.map((user) => {
        return (
          <div key={user.email}>
            <h1>{user.email}</h1>
            <p>{user.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// const testHeader = "gili"

// const userTest = {
//   name: "gili",
//   age: 28
// }

// const hello = () => {
//   return <p>hello</p>
// }
{
  /* <div className="App">
      <Title header="this is title"/>
      <Title header="hello"/>
      <Title header="world"/>
      <Title header="test"/>
      <Title header={testHeader}/>
      <Paragraph color="red">
        <h1>hello</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet doloribus rem aliquid voluptatum est illum laboriosam quos odit consequatur deleniti, qui quo tempore, in, ipsam sed incidunt quia laudantium iure?</p>
      </Paragraph>
      <Paragraph color="blue">this is gili</Paragraph>
      <Paragraph>no color</Paragraph>
      <Paragraph color="blue">3</Paragraph>
      <Paragraph color="blue">{hello()}</Paragraph>
      <Paragraph color="blue"></Paragraph>
      <Paragraph color="blue">{JSON.stringify(user)}</Paragraph>
    </div> */
}
