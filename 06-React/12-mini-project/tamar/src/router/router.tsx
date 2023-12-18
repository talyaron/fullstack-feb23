import { createBrowserRouter } from "react-router-dom"
import DogsPage from "../component/DogsPage"

export const router = createBrowserRouter([
    { path: "/", element: <DogsPage /> }
]) 
