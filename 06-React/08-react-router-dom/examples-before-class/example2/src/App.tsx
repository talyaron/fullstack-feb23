import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";

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
