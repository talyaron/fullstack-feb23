import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //     // loader: teamLoader,
  //   },
  // ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/", // yes, again
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/login", element: <Login /> },
        { path: "/user-page/:id", element: <UserPage /> },
      ],
    },
  ]);

  function NavbarWrapper() {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
