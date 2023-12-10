import NavBar from "../../componnets/NavBar"; 
import { Outlet } from "react-router-dom";
export default function NavBarWrapper() {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  }
  