
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const NavbarWrapper = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default NavbarWrapper