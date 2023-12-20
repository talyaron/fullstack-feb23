import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import dogsGallery from './components/DogsGallery'
import DogPage from './components/dogPage'
import DogsGallery from './components/DogsGallery'
import HomePage from './components/homePage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {path:"/" , element: <HomePage/>},
    {path:"/dog/:type", element:<DogPage/> }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
