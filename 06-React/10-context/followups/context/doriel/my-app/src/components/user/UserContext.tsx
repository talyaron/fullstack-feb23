// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextProps {
  children: ReactNode;
}

interface User {
  id: number;
  name: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
