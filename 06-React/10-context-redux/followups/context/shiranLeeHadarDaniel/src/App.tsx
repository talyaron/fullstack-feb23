
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Card from './components/card/Card';
import MiniCard from './components/minicard/MiniCard';

function App() {
 const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/card", element: <Card /> },
    { path: "/miniCard", element: <MiniCard /> },
    { path: "*", element: <p>Page 404</p> },
  ]);

  return <RouterProvider router={router} />;
}

export default App
