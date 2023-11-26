import { FC } from "react";
import { User } from "../types/types";

interface NavBarProps {
  user: User;
//   addOne: (userId: number) => void;
//   removeOne: (userId: number) => void;
}

const NavBar: FC<NavBarProps> = ({ user, }) => {
  return (
    <div key={user.id}>
      <h1>{user.name}</h1>
     
    </div>
  );
};

export default NavBar;