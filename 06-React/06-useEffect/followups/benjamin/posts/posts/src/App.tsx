import React, { useState, useEffect } from "react";
import "./App.scss";
import { getAllUsers } from "./API/usersAPI";
import { getAllPosts } from "./API/userPosts";
import User from "./Components/Users/User";
import Post from "./Components/Posts/Post";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeUser, setActiveUser] = useState<number | null>(null); // Active user ID
  const [activeUserPosts, setActiveUserPosts] = useState([]); // Active user ID

  useEffect(() => {
    handleGetUsers();
  }, []);
  useEffect(() => {
    handleGetUserPosts();
  }, []);

  interface User {
    adress: string;
    company: string;
    id: number;
    username: string;
  }

  interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
  }

  const handleGetUsers = async () => {
    try {
      const response = await getAllUsers();
      console.log(response);
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetUserPosts = async () => {
    try {
      const response = await getAllPosts();
      console.log(response);
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const activateUser = (id: number) => {
    setActiveUser(id);
    const userPosts = posts.filter((post) => post.userId === id);
    setActiveUserPosts(userPosts);
  };

  const isActive = (id: number) => {
    const user = users.filter((user) => user.id === id);
  };

  let activeUserData;
  if (activeUser !== null) {
    activeUserData = users.find((user) => user.id === activeUser);
  }
  

  return (
    <>
      <div className="flex flex-row w-screen gap-32">
        <>
          <div className=" antialiased flex flex-col">
            {users.map((user) => (
              <User
                key={user.id}
                company={user.company}
                id={user.id}
                username={user.username}
                activateUser={() => activateUser(user.id)}
                isActive={user.id === activeUser}
              />
            ))}
          </div>
        </>

        <div className=" antialiased w-3/12">
          {activeUserPosts.map((post) => (
            <Post
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
              username={activeUserData ? activeUserData.username : ""}
              university={activeUserData ? activeUserData.company.name : ""}
            ></Post>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
