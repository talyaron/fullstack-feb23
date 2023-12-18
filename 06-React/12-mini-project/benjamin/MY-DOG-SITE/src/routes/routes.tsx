import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import DogPage from '../pages/DogPage';

export const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/homePage", element: <HomePage /> },
    { path:"/dogPage", element:<DogPage/> }
]);