import { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Post from "./components/Posts/Post";
import { Button } from "@nextui-org/react";
import { getUserFromServer, getAllUsersFromApi } from "./api/usersApi";
import { getAllPostsFromApi } from "./api/postsApi"



function App() {

  const [userID, setUserID] = useState<number | null>(null);
  const [users, setUsers] = useState<object[] | null>(null);
  const [posts, setPosts] = useState<object[] | null>(null);
  const [activeUser, setActiveUser] = useState<object | null>(null)
  const [activePost, setActivePost] = useState<string | null>(null)


  useEffect(() => {
    getAllUsers()
  }, []);
  useEffect(() => {
    getAllPosts()
  }, []);
  useEffect(() => {
    setActiveUserFunc(userID)
    setActivePostFunc(userID)
  }, [userID]);


  const getUserAPI = async (email: string, password: string) => {
    try {
      const data = await getUserFromServer(email, password)
      console.log(data);
      manageData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const manageData = (data: object) => {
    setUserID(data.id);
  }

  const setActiveUserFunc = (id: number |null) => {
    debugger;
    const user = users?.find((user) => {
      return (user.id === id)
    })
    setActiveUser(user);
  }

  const setActivePostFunc = (id: number| null) => {
    const post = posts?.find((post) => {
     return (post.userId === id)
    })
    setActivePost(post);
  }


  const getAllUsers = async () => {
    const data = await getAllUsersFromApi();
    console.log(data)
    setUsers(data)
  }

  const getAllPosts = async () => {
    const data = await getAllPostsFromApi();
    console.log(data)
    setPosts(data)
  }

  return (
    <>
      <div className=" w-screen h-screen flex flex-row gap-4 justify-center items-center">
        <Login getUser={getUserAPI}></Login>
        <Post firstName={activeUser? activeUser.firstName: "Jenna"} lastName={activeUser? activeUser.lastName: "Smith" } body={activePost? activePost.body: "No Post Found"}></Post>
      </div>
    </>
  );
}

export default App;
