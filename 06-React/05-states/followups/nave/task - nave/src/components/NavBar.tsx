import { FC } from "react";
import { User } from "../types/types";

interface NavBarProps {
  user: User | null;
}

const NavBar: FC<NavBarProps> = ({ user }) => {
  return (
    <div>
      {user ? (
        <h1>{user.name}</h1>
      ) : (
        <h1>No user selected</h1>
      )}
    </div>
  );
};

export default NavBar;