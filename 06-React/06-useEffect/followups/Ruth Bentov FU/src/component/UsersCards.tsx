import React from "react";
import { getAllUsers } from "../api/getsMethod";
import UserCard from "./UserCard";

const UsersCards = async () => {
  const users = await getAllUsers();

  function userClicked(userId: number) {}

  return (
    <div>
      {users.map((user: User) => {
        <UserCard
          user={user}
          userClicked={() => {
            userClicked(user.id);
          }}
        />;
      })}
    </div>
  );
};

export default UsersCards;
