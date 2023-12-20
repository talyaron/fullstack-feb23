import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserContext } from './context/userContext';
import Card from './components/card/Card';


function App() {
  const [user, setUser] = useState()

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
      
      <Card />
     
      {/* </CartContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;


