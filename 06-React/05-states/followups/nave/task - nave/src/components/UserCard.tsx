// UserCard.tsx
import { FC } from "react";
import { User } from "../types/types";

interface UserCardProps {
  user: User;
  addOne: (userId: number) => void;
  removeOne: (userId: number) => void;
  onSelect: () => void;
}

const UserCard: FC<UserCardProps> = ({ user, addOne, removeOne,onSelect  }) => {
  return (
    <div key={user.id} onClick={onSelect} style={{ cursor: "pointer" }}>
      <h5>{user.name}</h5>
      <h4>{user.username}</h4>
      <h4>{user.id}</h4>
      <p>Count: {user.counter}</p>
      <button onClick={() => addOne(user.id)}>להוסיף</button>
      <button onClick={() => removeOne(user.id)}>  להוריד</button>
    </div>
  );
};

export default UserCard;