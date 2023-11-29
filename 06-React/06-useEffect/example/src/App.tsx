import { useEffect, useState } from "react";
import "./App.scss";
import UserCard, { User } from "./components/UserCard";
import { CircularProgress, Typography, Box } from "@mui/material";
// import axios from "axios";

function App() {
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "Bret",
  //   email: "Sincere@april.biz",
  //   address: {
  //     street: "Kulas Light",
  //     suite: "Apt. 556",
  //     city: "Gwenborough",
  //     zipcode: "92998-3874",
  //     geo: {
  //       lat: "-37.3159",
  //       lng: "81.1496",
  //     },
  //   },
  //   phone: "1-770-736-8031 x56442",
  //   website: "hildegard.org",
  //   company: {
  //     name: "Romaguera-Crona",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     bs: "harness real-time e-markets",
  //   },
  // });

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllUsers = async () => {
    try {
      // const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
      // console.log(data)
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersDB = await response.json();
      console.log(usersDB)
      if(usersDB[0].id) {
        setUsers(usersDB)
        setLoading(false)
      }
      // if(data[0].id) {
      //   setUsers(data)
      //   setLoading(false)
      // }
    } catch (error) {
      console.error(error)
    }
  }
 
  useEffect(() => {
    getAllUsers()
  },[])

  return (
    <>
      {/* <UserCard user={user} /> */}
      {/* the state is still loading, and the array is still empty */}
      {users.length == 0 && loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "300px" }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      {/* the state is not loading, and the array is full */}
      {users.length > 0 && !loading ? <Box>
        {users.map((user) => {return <UserCard key={user.id} user={user}/>})}
      </Box> : null}
      {/* the state is not loading, and the array is still empty */}
      {users.length == 0 && !loading ? (
        <Typography>Nothing to see here.</Typography>
      ) : null}
    </>
  );
}

export default App;
