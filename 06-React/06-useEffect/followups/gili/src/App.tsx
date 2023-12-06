import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import { ReportHandler } from 'web-vitals';
import { getAllUsers } from "./api/usersApi";

// # advanced

// 1. Create a UserCard component that fetches data from JSONPlaceholder API
// (https://jsonplaceholder.typicode.com/). show the users in app.tsx.

// 2. create UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). Add this component to each user card, and only show it after that user card has been clicked. show this component only when the user card is clicked.
// # Expactions

// 1.  Each of the components should only fetch data when it mounts.

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState()

  const handleGetUsers = async () => {
    try {
      const data = await getAllUsers()
      if (data.length > 0) {
        setUsers(data)
      }
    } catch (error) {
      console.error(error)
    }
  } 

  useEffect(() => {
    handleGetUsers()
  }, [])

  return (
    <>
    {/* {users.length > 0 && users.map(())} */}
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return <UserCard user={user} />;
          })}
        </div>
      ) : (
        <p>Nothing to show here...</p>
      )}
    </>
  );
}

export default App;
