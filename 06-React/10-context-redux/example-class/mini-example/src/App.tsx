import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Card from "./components/card/Card";
import { UserContext } from "./contexts/userContext";

function App() {
  const [user, setUser] = useState();

  // happens in api folder, under userApi.ts file
  async function getUser() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <CartContext.Provider value={{ user, setUser }}> */}
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
      {/* </CartContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;
