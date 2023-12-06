import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import About from '../Pages/About/About';
import ContectUs from '../Pages/ContectUs/ContectUs';


export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About /> },
    { path: "/contact-us", element: <ContectUs /> }
]);