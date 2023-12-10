import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/pages/Home`;
import About from '../pages/About/About';
import NavBarWrapper from '../views/layouts/NavBarWrapper/NavbarWrapper';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBarWrapper />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/HomePage", element: <p>This is homepage</p> },
      ],
    },
  ]);