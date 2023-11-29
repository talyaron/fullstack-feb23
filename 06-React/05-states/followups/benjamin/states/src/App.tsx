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
  const [clickedUserId, setClickedUserId] = useState<number | null>(null);
  const [posts, setPosts] = useState<JSX.Element[]>([]);
  const [selectedUserName, setSelectedUserName] = useState<string>("");
  const [userError, setUserError] = useState("none");

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

  const handlePostForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (clickedUserId === null) {
      setUserError("block");
    } else {
      const formData = new FormData(event.currentTarget);
      const body = formData.get("body") as string;
      createNewPost(body);
    }
  };

  const createNewPost = (body: string) => {
    const newPost = (
      <Post title={selectedUserName} body={body} setBody={setBody} key={new Date().getTime()}></Post>
    );
    setPosts([...posts, newPost]);
  };

  const handleUserClick = (userId: number) => {
    setClickedUserId(userId);
    setHeader(userId);
  };

  const userStyle = (userId: number) => ({
    backgroundColor: userId === clickedUserId ? "red" : "transparent",
  });

  const setHeader = (userId: number) => {
    const selectedUser = usersArr.find((user) => user.props.id === userId);

    console.log(selectedUser);
    if (selectedUser) setSelectedUserName(selectedUser.props.name);
  };

  return (
    <>
      <h1 className="selectedUser">{selectedUserName}</h1>
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
            <div
              onClick={() => handleUserClick(user.props.id)}
              style={userStyle(user.props.id)}
              key={user.props.id}
            >
              {user}
            </div>
          ))}
        </div>

        <Form className="form" onSubmit={handlePostForm}>
          <Form.Group className="mb-3" controlId="lname">
            <h3 style={{ color: "darksalmon" }}>by: {selectedUserName}</h3>
            <Form.Label>your new post:</Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: "20vh", overflow: "scroll" }}
              type="text"
              placeholder="Write your post here!"
              name="body"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p style={{ display: userError, color: "red" }}>no user selected!</p>
        </Form>

        <div className="second">
          {posts.map((post) => (
            <div key={post.key}>
              {post}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
