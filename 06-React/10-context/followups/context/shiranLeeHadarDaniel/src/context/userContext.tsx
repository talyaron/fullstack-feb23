//userContext.tsx   

import { createContext, useEffect, useState } from "react";
import { getUserdb } from "../api/userApi";

interface UserContextProps {
    children: React.ReactNode;
  }

const UserContext = createContext<User | null>(null!);
const UserProvider: React.FC<UserContextProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      async function fetchUser() {
        try {
          const data: User = await getUserdb();
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchUser();
    }, []);
  
    return (
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    );
  };

  export { UserProvider, UserContext };