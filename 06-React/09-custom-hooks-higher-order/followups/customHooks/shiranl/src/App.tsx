
import './App.css'
import Money from './components/money/Money'
import People from './components/people/People'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router= createBrowserRouter([
    { path: "/", element: <Money /> },
    { path: "/people", element: <People /> },
    { path: "/Money", element: <Money /> },
    { path: "*", element: <p>Page 404</p> },
  ])


  return <RouterProvider router={router} />;
}

export default App
