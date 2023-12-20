import { createBrowserRouter } from "react-router-dom"
import DogsPage from "../component/DogsPage"
import DogPge from "../component/DogPge"

export const router = createBrowserRouter([
    { path: "/", element: <DogsPage /> },
    { path: "/dog/:breed", element: <DogPge /> }
]) 
