import React from "react";
import Counter from "./Counter";


type User = {
  id: number;
  firstName: string;
  lastName: string;
  icon: string;
};

type UserProps = {
  user: User;
  counter?: number;
};

const User: React.FC<UserProps> = ({ user, counter }) => {
  return (
    <div>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <h3>ID: {user.id}</h3>

      {counter && counter > 0 ? <p>{user.icon}</p> : null}

      <Counter />
    </div>
  );
};

export default User;
