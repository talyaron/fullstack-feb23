
import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/Login';

export const router = createBrowserRouter([
    {
    path:"/", element: <Login/>
    },
  ]);