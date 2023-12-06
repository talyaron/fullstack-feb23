import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserPage from "./pages/userPage/UserPage";
import { router } from "./routes/routes";

function App() {
  // const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/homepage", element: <p>This is homepage</p> },
  //   { path: "/about", element: <About /> },
  //   { path: "*", element: <p>Page 404</p> },
  // ]);

  //this could go to routes folder
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <NavBarWrapper />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/about", element: <About /> },
  //       { path: "/homepage", element: <p>This is homepage</p> },
  //       { path: "/user-page/:id", element: <UserPage/> },
  //     ],
  //   },
  // ]);

  //this belongs in layouts
  // function NavBarWrapper() {
  //   return (
  //     <div>
  //       <Navbar />
  //       <Outlet />
  //     </div>
  //   );
  // }

  return <RouterProvider router={router} />;
}

export default App;
