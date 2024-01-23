import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Navbar from "../components/NavBar"
import Layout from "../views/layouts/Layout"
import AboutUs from "../components/AboutUs"
import Login from "../components/Login"
import RegisterPage from "../views/pages/register-page"
import HomePage from "../views/pages/home-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <RegisterPage /> },
      { path: "/home-page", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/genres", element: <RegisterPage /> },
      { path: "/contact", element: <RegisterPage /> },
      { path: "/login-page", element: <Login /> },
    ],
  },
])