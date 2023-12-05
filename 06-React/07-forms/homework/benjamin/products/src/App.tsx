import { useState , useEffect} from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Post from "./components/Posts/Post";
import { Button } from "@nextui-org/react";
import { getUserFromServer , getAllUsersFromApi } from "./api/usersApi";
import {getAllPostsFromApi} from "./api/postsApi"



function App() {

  const [userID, setUserID] = useState<number | null>(null);
  const [users, setUsers] = useState<object[] | null>(null);
  const [posts, setPosts] = useState<object[] | null>(null);


  useEffect(() => {
    getAllUsers()
  }, []);
  useEffect(() => {
    getAllPosts()
  }, []);


  const getUserAPI = async (email:string,password:string) => {
    try {
      const data = await getUserFromServer(email,password)
      console.log(data);
      manageData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const manageData = (data:object) => {
    setUserID(data.id)
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
    <div className=" w-full h-full flex flex-row gap-4">
      <Login getUser={getUserAPI}></Login>
      <Post></Post>
      </div>
    </>
  );
}

export default App;
