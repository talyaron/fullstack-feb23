// import { useState, useEffect } from 'react';
// import "./App.css";
// import Login from './components/Login';
// import PostsList from './components/PostList';


// const App = () => {
//   const [userId, setUserId] = useState<number>();

//   useEffect(() => {
//     const userId = sessionStorage.getItem("user");
//     if (userId) setUserId(parseInt(userId.toString()));
//   }, []);

//   const handleLoginData = (user: User) => {
//     setUserId(user.id);
//     sessionStorage.setItem("token", user.token); // Save the user token
//   };
  

//   return (
//     <>
//       {!userId ? (
//         <Login onLogin={handleLoginData} />
//       ) : (
//         <PostsList />
//       )}
//     </>
//   );
// };

// export default App;
import React, { useEffect, useState, FC } from "react";
import Login from './components/Login';
import PostsList from './components/PostList';


interface AppProps {
  userId: number;
  PostId:number;
}

const App: FC<AppProps> = (props) => {
  const [userId, setUserId] = useState<number | null>(null);  // יש לשנות את סוג המשתנה ל- number | null
  const [userPosts, setUserPosts] = useState<Post[]>([]);  // הגדר משתנה לאחסון הפוסטים של המשתמש

  useEffect(() => {
    const userId = sessionStorage.getItem("user");
    if (userId) setUserId(parseInt(userId.toString()));

    // הוסף קריאה למשתנה הפוסטים כאשר המשתמש מתעדכן
    if (userId) {
      fetch(`https://dummyjson.com/posts/user/${userId}`)
        .then(res => res.json())
        .then(data => setUserPosts(data))
        .catch(error => console.error("Error fetching user posts", error));
    }
  }, [userId]);  // התעדכן רק כאשר המשתמש משתנה

  const handleLoginData = async (user: User) => {
    setUserId(user.id);
    sessionStorage.setItem("token", user.token); // Save the user token

    // הוסף קריאה למשתנה הפוסטים כאשר המשתמש מתחבר
    try {
      const response = await fetch(`https://dummyjson.com/posts/user/${user.id}`);
      const data = await response.json();
      setUserPosts(data);
    } catch (error) {
      console.error("Error fetching user posts", error);
    }
  };

  return (
    <>
      {!userId ? (
        <Login onLogin={handleLoginData} />
      ) : (
        <PostsList posts={userPosts} />
      )}
    </>
  );
};

export default App;

