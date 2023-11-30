import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/getsMethod";
import UserCard from "./UserCard";

const UsersCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const userClicked = (userId: number) => {
    // Handle user click functionality here
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          userClicked={() => userClicked(user.id)}
        />
      ))}
    </div>
  );
};

export default UsersCards;
