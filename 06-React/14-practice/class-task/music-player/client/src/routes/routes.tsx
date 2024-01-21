import React from "react"
import { createBrowserRouter } from "react-router-dom"
import HomePage from "../views/pages/HomePage"
import RegisterPage from "../views/pages/RegisterPage"
import Navbar from "../components/NavBar"
import Layout from "../views/layouts/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <RegisterPage /> },
      { path: "/home-page", element: <HomePage /> },
      { path: "/register-page", element: <RegisterPage /> },
    ],
  },
])
