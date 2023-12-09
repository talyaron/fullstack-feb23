import Navbar from "../../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function NavBarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
