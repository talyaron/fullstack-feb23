import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import getDogs from "./api/dogsApi";
import { router } from "./routes/routes";
import { DogContext } from "./context/dogContext";

function App() {
  const [dog, setDog] = useState();
  return (
    <DogContext.Provider value={{ dog, setDog }}>
      <RouterProvider router={router} />
    </DogContext.Provider>
  );
}

export default App;
