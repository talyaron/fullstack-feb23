
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import UserPage from '../pages/userPage/UserPage';
import NavBarWrapper from '../views/layouts/NavBarWrapper/NavbarWrapper';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBarWrapper />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/homepage", element: <p>This is homepage</p> },
        { path: "/user-page/:id", element: <UserPage/> },
      ],
    },
  ]);