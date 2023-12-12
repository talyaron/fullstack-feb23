import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <p>page 404</p> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
