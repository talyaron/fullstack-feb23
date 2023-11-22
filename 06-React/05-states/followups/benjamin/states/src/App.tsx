import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import User from "./Components/User/User";
import Post from "./Components/Post/Post";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);
  const [body, setBody] = useState("");
  const [usersArr, setUsersArr] = useState<JSX.Element[]>([]);

  const addNewUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const lastName = formData.get("lname") as string;
    console.log(name, lastName);
    const newUser = (
      <User id={new Date().getTime()} name={name} lastName={lastName}></User>
    );

    setUsersArr([...usersArr, newUser]);
  };

  return (
    <>
      <div className="wrapper">
        <div className="first">
          <Form className="form" onSubmit={addNewUser}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>name</Form.Label>
              <Form.Control type="text" placeholder="name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lname">
              <Form.Label>lname</Form.Label>
              <Form.Control type="text" placeholder="last name" name="lname" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {usersArr.map((user) => (
            <div key={user.props.id}>{user}</div>
          ))}
        </div>
        <div className="second">
          <Post title="hey world" body={body} setBody={setBody}></Post>
        </div>
      </div>
    </>
  );
}

export default App;
