import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [text, setText] = useState("fdsg");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  // move to api folder
  const handleLogin = async () => {
    try {
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username: "kminchelle",
        password: "0lelplR",
      });
      if (data.id) {
        setUser(data)
        // navigate("/about");
      } else {
        console.log("not logged in");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const handleGetUserPosts = async () => {
      try {
        if (user && user.id) {
          const {data} = await axios.get(`https://dummyjson.com/posts/user/${user.id}`)
          console.log(data)
        }else {
          console.log("nodata")
        }
      } catch (error) {
        console.error(error)
      }
    }
    handleGetUserPosts()
  }, [user])
  return (
    <div>
      Homepage
      <Link to={"/about"}>About</Link>
      <a href="/about">About</a>
      <NavLink to="/about">About nav</NavLink>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <button onClick={handleLogin}>login</button>
      {text ? <p>there is text</p> : <p>no text</p>}
      {user? <p>UserPosts</p> : <p>login</p>}
    </div>
  );
};

export default Homepage;
