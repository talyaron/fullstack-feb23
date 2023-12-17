import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import getDogs from "./api/dogsApi";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  useEffect(() => {
    getDogsFromApi();
  }, []);

  const getDogsFromApi = async () => {
    const data = await getDogs();
    console.log(data);
  };

  return <RouterProvider router={router} />;

}

export default App;
